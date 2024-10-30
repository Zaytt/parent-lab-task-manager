# Task Manager App - Parent Lab

A simple and intuitive task management application that allows users to create and track their tasks.

## Functionality

- View a list of tasks
- Create new tasks via modal form
- Toggle task status (pending/completed) with optimistic updates
- Responsive design for all screen sizes

## Tech Stack

- **React** - UI Framework
- **Vite** - Build tool and development environment
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **Axios** - HTTP client

## Setup

1. Clone the repository
2. Install dependencies: bash npm install
3. Create a `.env` file in the root directory and add: VITE_API_URL=your_backend_url_here # e.g., http://localhost:4000

## Running the Application

### Development Mode

```
bash
npm run dev
```

### Production Build

```
bash
npm run build
npm run preview # to preview the production build locally
```

## Notes

- This project used AI (Claude) for boilerplate code generation, component structure and quick styling
- For the task creation, I implemented an optimistic approach that reduces response time for the user.

## Future Improvements

- Implement loading spinners
- Implement delete task functionality
- Add task categories/labels
- Add due dates
- Implement task filtering and search
- Create consistent error messaging through error constants
