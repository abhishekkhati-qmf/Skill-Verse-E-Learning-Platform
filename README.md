# Skill-Verse: Full-Stack E-Learning Platform

Skill-Verse is a comprehensive, full-stack e-learning platform built with the MERN stack (MongoDB, Express.js, React, Node.js) and integrated with modern tools like Redux Toolkit Query, Tailwind CSS, and Vite. The platform supports distinct roles for students and instructors, featuring secure payments via Cashfree and media management with Cloudinary.

## 📸 Screenshots

### Homepage
![AI Recruiter Homepage](public/ai1.png)

## 📸 Screenshots

### Instructor Dashboard
![AI Recruiter Dashboard](public/ai2.png)

## 📸 Screenshots

### Edit Profile
![AI Recruiter Homepage](public/ai3.png)


## Key Features

| Role/System        | Feature                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| 🧑‍🎓 **Student**      | Discover and search for courses, filter by category/price, enroll via secure payment, track progress. |
| 👨‍🏫 **Instructor**   | Instructor dashboard, create and manage courses (CRUD), upload and edit lectures, publish/unpublish courses. |
| 🔐 **Authentication** | Secure user registration and login using JSON Web Tokens (JWT) stored in cookies.                   |
| 💳 **Payments**    | Integrated with Cashfree Payment Gateway for seamless course purchases.                                |
| 📊 **Dashboard**   | Instructors can view key metrics like total sales and revenue with graphical data representation.      |
| ⚙️ **Media**         | Efficient video uploads and management handled by Multer and Cloudinary.                             |
| 🌗 **UI & Theme**    | Modern, responsive interface built with Shadcn/ui and Tailwind CSS, featuring a dark/light mode toggle. |

## Tech Stack

| Category         | Technology / Library                                                               |
| ---------------- | ---------------------------------------------------------------------------------- |
| **Frontend**     | React, Vite, Redux Toolkit (RTK Query), React Router, Tailwind CSS, Shadcn/ui, Axios |
| **Backend**      | Node.js, Express.js                                                                |
| **Database**     | MongoDB with Mongoose                                                              |
| **Authentication** | JSON Web Tokens (JWT), bcryptjs                                                       |
| **Payments**     | Cashfree Payment Gateway                                                             |
| **File Storage** | Cloudinary, Multer                                                                   |

## Project Structure

The repository is structured as a monorepo with separate directories for the client and server applications.

```
skill-verse-e-learning-platform/
├── client/       # React (Vite) frontend application
└── server/       # Node.js (Express) backend application
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or a cloud instance like MongoDB Atlas)
- [Cloudinary](https://cloudinary.com/) account for media storage
- [Cashfree](https://www.cashfree.com/) account for payment processing

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/abhishekkhati-qmf/Skill-Verse-E-Learning-Platform.git
    cd Skill-Verse-E-Learning-Platform
    ```

2.  **Set up the Backend:**
    ```bash
    # Navigate to the server directory
    cd server

    # Install dependencies
    npm install

    # Create a .env file and add your environment variables (see below)
    touch .env 

    # Start the development server
    npm run dev
    ```

3.  **Set up the Frontend:**
    ```bash
    # Navigate to the client directory from the root folder
    cd client

    # Install dependencies
    npm install

    # Start the development server
    npm run dev
    ```
    The client will be running on `http://localhost:5173` and the server on `http://localhost:8080`.

### Environment Variables

Create a `.env` file in the `server` directory and add the following variables:

```env
# Server Configuration
PORT=8080
MONGO_URI=your_mongodb_connection_string

# JWT Configuration
SECRET_KEY=your_super_secret_jwt_key

# Cloudinary Credentials
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# Cashfree Payments Credentials (use sandbox keys for development)
APP_ID=your_cashfree_app_id
CASHFREE_SECRET_KEY=your_cashfree_secret_key
