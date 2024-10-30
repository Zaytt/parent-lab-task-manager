// index.ts
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

interface Task {
  id: string;
  title: string;
  status: 'pending' | 'completed';
}

let tasks: Task[] = [];

// import task routes
app.use('/api/tasks', taskRoutes);

// Start the server on port 4000
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
