import { create } from 'zustand';
import { Task } from '../components/Tasks/Task.types';

export interface TaskStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  updateTaskStatus: (taskId: string, status: 'pending' | 'completed') => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  
  setTasks: (tasks) => set({ tasks }),
  
  addTask: (newTask) => 
    set((state) => ({ 
      tasks: [...state.tasks, newTask] 
    })),
  
  updateTaskStatus: (taskId, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      ),
    })),
}));