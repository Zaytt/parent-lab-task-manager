export type TaskStatus = 'pending' | 'completed';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

// Component prop types
export interface TaskCardProps {
  task: Task;
  onStatusChange: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
}

export interface TaskListProps {
  tasks: Task[];
  isLoading?: boolean;
  error?: string;
}