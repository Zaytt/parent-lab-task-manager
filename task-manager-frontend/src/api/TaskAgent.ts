import axios, { AxiosError } from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error('VITE_API_URL is not defined in the environment variables');
}

interface Task {
  id: string;
  title: string;
  status: 'pending' | 'completed';
}

interface ApiError {
  message: string;
  code?: string;
}

export class TaskAgent {
  private static handleError(error: unknown): never {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      
      if (axiosError.response) {
        // Server responded with error status
        throw new Error(
          axiosError.response.data?.message || 
          `Server error: ${axiosError.response.status}`
        );
      } else if (axiosError.request) {
        // Request made but no response received
        throw new Error('No response from server. Please check your connection.');
      }
    }
    // Unknown error
    throw new Error('An unexpected error occurred');
  }

  static async getTasks(): Promise<Task[]> {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async addTask(title: string): Promise<Task> {
    try {
      const response = await axios.post(`${API_URL}/tasks`, { title });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async updateTask(id: string, status: 'pending' | 'completed'): Promise<Task> {
    try {
      const response = await axios.patch(`${API_URL}/tasks/${id}/${status}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

// Optional: Export error types for use in components
export type { ApiError };