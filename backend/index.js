import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors  from 'cors';
import tourRoute from "./route/tourRoute.js"
import userRoute from "./route/userRoute.js"
import authRoute from "./route/authRoute.js"
import reviewRoutes from "./route/reviewRoutes.js"
import bookingRoutes from "./route/bookingRoutes.js"
import bodyParser from "body-parser";
import generatePDFHandler from './handler.js'; // Note the .js extension
dotenv.config();
const app= express();
const port= process.env.PORT||8000;
const corsOptions={
    origin:["https://tour-management-app-ctus.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}





// Define a route for generating PDF
app.post('/generate-pdf', generatePDFHandler);

app.get("/", (req,res)=>{
    res.send("working")
});
mongoose.set("strictQuery",false);
const Connect=async ()=>{
    try{
      await mongoose.connect("mongodb+srv://Riya:Riya1234@cluster0.ucwx52k.mongodb.net/tour-booking");
      console.log("Database is connected");
    }
    catch(error){
        console.log(error)
    }
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
    next();
}) 
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/booking", bookingRoutes);

app.listen( port,()=>{
    Connect();

    console.log(`server is running on the port ${port}`)
})
app.listen(port, 'localhost'); // or server.listen(3001, '0.0.0.0'); for all interfaces
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});
