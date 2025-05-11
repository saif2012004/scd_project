# Task Management System

A full-stack MERN application for managing tasks with features like task categories, priority levels, and due dates. This project is part of a Kubernetes deployment exercise.

## Features

- User authentication (Register/Login)
- Create, Read, Update, and Delete tasks
- Task categorization (Work, Personal, Shopping, Health, Other)
- Priority levels (High, Medium, Low)
- Due date tracking
- Modern Material-UI interface
- Responsive design

## Tech Stack

### Frontend

- React.js
- Material-UI
- Axios for API calls
- React Router for navigation
- React Toastify for notifications

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd task-manager-kubernetes
```

2. Install backend dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
cd frontend
npm install
```

4. Create a .env file in the root directory with the following variables:

```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret
```

## Running the Application

1. Start the backend server:

```bash
npm run server
```

2. In a new terminal, start the frontend development server:

```bash
cd frontend
npm start
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication

- POST /api/users - Register a new user
- POST /api/users/login - Login user
- GET /api/users/me - Get current user

### Tasks

- GET /api/tasks - Get all tasks
- POST /api/tasks - Create a new task
- GET /api/tasks/:id - Get a single task
- PUT /api/tasks/:id - Update a task
- DELETE /api/tasks/:id - Delete a task

## Project Structure

```
task-manager-kubernetes/
├── backend/
│   ├── config/
│   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── taskController.js
│   │   │   └── userController.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   ├── taskModel.js
│   │   │   └── userModel.js
│   │   ├── routes/
│   │   │   ├── taskRoutes.js
│   │   │   └── userRoutes.js
│   │   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Header.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── .env
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

text for testing github actions workflow

test 2 for github worlflow
