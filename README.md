# TravelWorld

TravelWorld is a booking platform that allows users to book tours to various destinations. The application is built using modern web technologies to provide a seamless and fast experience for users on both desktop and mobile devices.

[Live Deployment link](https://tour-management-app-full-stack.vercel.app/)

## Features

- **User Authentication**: Create an account and log in securely.
- **Tour Listings**: Browse tours with images and descriptions.
- **Search Bar**: Easily find specific tours.
- **Featured Tours and Customer Gallery**: View highlighted tours and customer-uploaded images.
- **Tour Details**: View comprehensive information and total costs of tours.
- **Profile Management**: Update user profile information.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

### Frontend:
- JavaScript
- React.js
- Context API
- React Router v6
- Reactstrap
- CSS3

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB
- Mongoose

### Authentication:
- JWT (JSON Web Tokens)
- Cookies

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/TravelWorld.git
    cd TravelWorld
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    NODE_ENV=development
    PORT=5000
    MONGO_URI=your_mongo_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

The backend server will be running on `http://localhost:5000`.

5. Start the frontend development server:
    ```sh
    cd client
    npm start
    ```

The application will be running on `http://localhost:3000`.

## Project Structure
```plaintext
TravelWorld/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   └── ...
├── controllers/
├── models/
├── routes/
├── .env
├── server.js
├── package.json
└── README.md
