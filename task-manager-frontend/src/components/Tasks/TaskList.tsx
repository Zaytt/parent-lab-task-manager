import React from 'react';
import Task from './Task';
import { TaskAgent } from '../../api/TaskAgent';
import { TaskStore, useTaskStore } from '../../store/taskStore';


const TaskList: React.FC = () => {
  const tasks = useTaskStore((state: TaskStore) => state.tasks);
  const setTasks = useTaskStore((state) => state.setTasks);
  const updateTaskStatus = useTaskStore((state) => state.updateTaskStatus);

  const handleStatusChange = async (taskId: string, newStatus: 'pending' | 'completed') => {
    const originalTasks = [...tasks];
    
    // Optimistic update
    updateTaskStatus(taskId, newStatus);

    try {
      await TaskAgent.updateTask(taskId, newStatus);
    } catch (error) {
      // Rollback on failure
      setTasks(originalTasks);
      console.error('Failed to update task:', error);
    }
  };

  return (
    <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskList;