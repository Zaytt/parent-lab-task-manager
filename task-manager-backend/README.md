# Task Manager API - Parent Lab

A RESTful API service that manages tasks for the Task Manager application.

## Functionality

- GET /tasks - Retrieve all tasks
- POST /tasks - Create a new task
- PATCH /tasks/:id/:status - Update task status
- DELETE /tasks/:id - Delete a task

## Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety and better developer experience
- **UUID** - Unique identifier generation
- **Cors** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

## Setup

1. Clone the repository
2. Install dependencies: bash npm install
3. Create a `.env` file in the root directory and add: PORT=3000

## Running the Application

### Development Mode

```
bash nodemon
```

### Production Build

```
bash npm run build
npm start
```
