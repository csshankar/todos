# Todo App

A simple Todo application that allows users to add and view todos. This app uses React for the frontend, Node.js for the backend, and MongoDB for data storage.

## Features

- Add new todos
- View all existing todos
- Simple and user-friendly interface

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine
- [MongoDB](https://www.mongodb.com/) installed or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for cloud database

### Installation

1. **Clone the repository**:
bash
Copy code
git clone https://github.com/csshankar/todo-app.git
cd todo-app

```markdown

## Getting Started

### Navigate to the backend directory:

```bash
cd backend
```

### Install backend dependencies:

```bash
npm install
```

### Set up the environment variables:

Create a `.env` file in the `backend` directory and add your MongoDB connection string:

```plaintext
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### Start the backend server:

```bash
npm start
```

### Navigate to the frontend directory:

Open a new terminal and run:

```bash
cd frontend
```

### Install frontend dependencies:

```bash
npm install
```

### Start the frontend development server:

```bash
npm start
```

## Usage

1. Open your browser and navigate to `http://localhost:5173` to view the app.
2. Use the input field to add new todos.
3. Click the "Add" button to save your todos.
4. View all your added todos displayed on the screen.

## API Endpoints

- `GET /todos` - Retrieve all todos
- `POST /todo` - Add a new todo
- `PUT /completed` - Changed completed status 

### Example Request for Adding a Todo

```json
POST /todo
{
   "title": "title",
   "description": "description"
}
```

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues and pull requests to improve the app!

## Acknowledgments

Thanks to the open source community for the inspiration and libraries used in this project.
```