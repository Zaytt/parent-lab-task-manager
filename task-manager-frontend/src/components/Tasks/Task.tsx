import React from 'react'

interface TaskProps {
  task: {
    id: string;
    title: string;
    status: 'pending' | 'completed';
  };
  onStatusChange: (id: string, status: 'pending' | 'completed') => void;
}
const Task: React.FC<TaskProps> = ({ task, onStatusChange }) => {
  
  return (
    <div className="flex items-center justify-between p-4 mb-2 border border-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      <span className={`text-sm sm:text-base ${task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'}`}>
        {task.title}
      </span>
      
      <input
        type="checkbox"
        checked={task.status === 'completed'}
        onChange={(e) => onStatusChange(task.id, e.target.checked ? 'completed' : 'pending')}
        className="w-4 h-4 cursor-pointer accent-blue-500"
      />
    </div>
  );
};


export default Task