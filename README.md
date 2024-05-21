![Expense Tracker](https://github.com/MrSandeepSharma/Expense-Tracker-Backend/assets/142038020/45301f0d-5b3d-4072-8819-612fa75c3e24)

## Overview 👋

Expense Tracker Backend is the server-side component of a simple and efficient expense tracking application. It provides APIs for managing user authentication and expense records, allowing users to track their spending, categorize expenses, and gain insights into their financial habits.

For the frontend part of this project, please visit [Expense Tracker Frontend](https://github.com/MrSandeepSharma/Expense-Tracker-Frontend).

You can also access the live API endpoints [here](https://expense-tracker-backend-09ud.onrender.com/).

## Tech Used 🛠

<div>
    <span>
      <img src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs">
    </span>
    <span>
      <img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" alt="express">
    </span>
    <span>
      <img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white" alt="mongodb">
    </span>
    <span>
      <img src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=for-the-badge&logo=Mongoose&logoColor=white" alt="mongoose">
    </span>
    <span>
      <img src="https://img.shields.io/badge/JSON%20Web%20Tokens-000000.svg?style=for-the-badge&logo=JSON-Web-Tokens&logoColor=white" alt="JWT">
    </span>
    <span>
      <img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white" alt="nodemon">
    </span>
</div>

## Project Setup ⛏️

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

1. **Clone the repository**
   
   ```bash
   git clone https://github.com/MrSandeepSharma/Expense-Tracker-Backend.git
   cd Expense-Tracker-Backend
   
2. **Install dependencies**
   
   ```bash
   npm install
   
3. **Set up environment variables**
   
   Create a .env file in the root directory and add the following:
   
   ```bash
   PORT=4000
   MONGODB_LOCAL_URI=mongodb://localhost:27017/expense-tracker
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   JWT_SECRET_EXPIRY=7d
   
3. **Start the development server**
   
   ```bash
   npm run dev

## API Integration 🚀

To integrate the Expense Tracker Backend APIs into your frontend application, you can follow these steps:

### Authentication

#### Register a new user
- **URL:** `POST /api/v1/auth/register`
- **Request Body:**
  ```json
  {
    "username": "exampleuser",
    "email": "user@example.com",
    "password": "password123"
  }
  
#### User login
- **URL:** `POST /api/v1/auth/login`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  
#### Get current user
- **URL:** `GET /api/v1/auth/current-user`
- **Request Body:**
  ```json
  {
    "Authorization": "Bearer jwt_token_here"
  }
  
#### User logout
- **URL:** `POST /api/v1/auth/logout`
- **Request Body:**
  ```json
  {
    "Authorization": "Bearer jwt_token_here"
  }

### Expense Management

#### Create a new expense
- **URL:** `POST /api/v1/expense`
- **Request Body:**
  ```json
  {
    "name": "Groceries",
    "amount": 50.75,
    "category": "Expense",
  }
- **Headers :**
  ```json
  {
    "Authorization": "Bearer jwt_token_here"
  }
  
#### Delete an expense by ID
- **URL:** `DELETE /api/v1/expense`
- **Request Body:**
  ```json
  {
    "expenseId": "expense id"
  }
- **Headers :**
  ```json
  {
    "Authorization": "Bearer jwt_token_here"
  }
  
#### Get all expenses for the authenticated user
- **URL:** `GET /api/v1/expense`
- **Headers :**
  ```json
  {
    "Authorization": "Bearer jwt_token_here"
  }

## Useful Resources 📚

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JSON Web Tokens (JWT) Documentation](https://jwt.io/introduction/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Nodemon Documentation](https://nodemon.io/)
- [Render](https://render.com/)
- [GitHub Repository for Expense Tracker Frontend](https://github.com/MrSandeepSharma/Expense-Tracker-Frontend)
