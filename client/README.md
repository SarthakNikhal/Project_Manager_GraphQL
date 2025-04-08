# Project Management App

## Overview

The Project Management App is a full-stack application designed to manage clients and their associated projects. It allows users to add, update, and delete clients and projects, as well as view detailed information about each project and its associated client. The app uses a GraphQL API for efficient data querying and mutation, and a React-based frontend for a seamless user experience.

## Technologies Used

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building the API.
- **GraphQL**: Query language for the API.
- **MongoDB**: NoSQL database for storing clients and projects.
- **Mongoose**: ODM library for MongoDB.
- **dotenv**: For environment variable management.

### Frontend
- **React**: JavaScript library for building the user interface.
- **Apollo Client**: State management and GraphQL client for React.
- **React Router**: For routing and navigation.
- **Bootstrap**: For responsive and styled UI components.
- **React Icons**: For adding icons to the UI.

### Development Tools
- **Nodemon**: For automatic server restarts during development.
- **Jest**: For testing React components.

## How to Fork and Use the App

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB Atlas account or a local MongoDB instance.
- Basic knowledge of React and GraphQL.

### Steps to Fork and Run the App

1. **Fork the Repository**
   - Click the "Fork" button on the GitHub repository to create your own copy.

2. **Clone the Repository**
   - Clone the forked repository to your local machine:
     ```bash
     git clone https://github.com/your-username/project-management-app.git
     cd project-management-app
     ```

3. **Set Up the Backend**
   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a [.env](http://_vscodecontentref_/0) file in the root of the [server](http://_vscodecontentref_/1) directory and add the following:
     ```
     NODE_ENV=development
     PORT=5000
     MONGO_URI=your-mongodb-connection-string
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

4. **Set Up the Frontend**
   - Navigate to the `client` directory:
     ```bash
     cd ../client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

5. **Using the App**
   - Add, update, and delete clients and projects using the intuitive UI.
   - View detailed information about projects and their associated clients.

### Additional Notes
- The backend server runs on [http://localhost:5000](http://localhost:5000) by default.
- The GraphQL API can be accessed at [http://localhost:5000/graphql](http://localhost:5000/graphql) in development mode.
- To deploy the app, follow the deployment guides for your hosting provider.

Enjoy managing your projects efficiently with this app!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

