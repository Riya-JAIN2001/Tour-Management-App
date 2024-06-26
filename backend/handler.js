const btoa = require("btoa");
const path = require("path");
let chromium;
// Check if we are running locally or on Vercel
if (!process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  const puppeteer = require("puppeteer");
  chromium = {
    puppeteer,
  };
} else {
  chromium = require("chrome-aws-lambda");
}
const renderHTML = require("./render-html");

/**
 * Normalizes the theme name by adding a prefix `jsonresume-theme` if not present
 * @param {String} value Name of the theme
 * @param {String} defaultValue Default Theme
 */
const normalizeTheme = (value, defaultValue = "even") => {
  const theme = value || defaultValue;

  // If theme has a relative path provided, immediately return
  if (theme[0] === ".") {
    return theme;
  }

  return theme.match("jsonresume-theme-.*")
    ? theme
    : `jsonresume-theme-${theme}`;
};

/**
 * Returns the theme Package
 * @param {String} theme Normalized theme name
 */
const getThemePackage = (theme) => {
  if (theme[0] === ".") {
    theme = path.join(process.cwd(), theme, "index.js");
  }

  try {
    const themePackage = require(theme);
    return themePackage;
  } catch (err) {
    // Theme not installed
    throw new Error(
      "You have to install this theme relative to the folder to use it e.g. `npm install " +
        theme +
        "`"
    );
  }
};

/**
 * Parses the `resumeJson` to render a pretty HTML
 * @param {Object} resumeJson Resume data
 * @param {String} themeName Name of the theme
 */
const parse = async (resumeJson, themeName) => {
  const html = await renderHTML({
    resume: resumeJson,
    themePath: themeName,
  });
  return html;
};

// See https://vercel.com/knowledge/how-to-enable-cors
const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle CORS pre-flight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  return await fn(req, res);
};

const handler = async (req, res) => {
  try {
    const { resumeData } = req.body;
    const normalizedTheme = normalizeTheme(resumeData.meta.theme, "even");
    const themePackage = getThemePackage(normalizedTheme);
    const html = await parse(resumeData, normalizedTheme);
    const browser = await chromium.puppeteer.launch();
    const page = await browser.newPage();
    await page.emulateMediaType(
      (themePackage.pdfRenderOptions &&
        themePackage.pdfRenderOptions.mediaType) ||
        "screen"
    );
    await page.goto(
      `data:text/html;base64,${btoa(unescape(encodeURIComponent(html)))}`,
      { waitUntil: "networkidle0" }
    );
    if (themePackage.pdfViewport) {
      await page.setViewport(themePackage.pdfViewport);
    }
    const pdf = await page.pdf({
      format: "Letter",
      printBackground: true,
      margin: {
        top: "0.5in",
        bottom: "0.5in",
        left: "0.5in",
        right: "0.5in",
      },
      ...themePackage.pdfRenderOptions,
    });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Length", pdf.length);
    res.send(pdf);
  } catch (err) {
    res.status(500);
    res.json({
      error: err,
    });
  }
};

module.exports = allowCors(handler);
