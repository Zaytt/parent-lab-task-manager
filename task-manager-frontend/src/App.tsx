import { useEffect, useState } from 'react';
import './App.css'
import TaskList from './components/Tasks/TaskList'
import CreateTaskModal from './components/Tasks/CreateTaskModal';
import { Alert } from './components/common/Alert';
import { TaskAgent } from './api/TaskAgent';
import { useTaskStore } from './store/taskStore';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const setTasks = useTaskStore((state) => state.setTasks);

  useEffect(()=>{
    let mounted = true;

    const fetchTasks = async () => {
      try {
        setError(null);
        const tasks = await TaskAgent.getTasks();
        setTasks(tasks);
        
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Something happened while trying to retrieve your tasks. Please try again.');
        }  
      }
    };
    fetchTasks();
    return () => {
      mounted = false;
    };
  }, [setTasks])

  return (
    <main className="min-h-screen bg-[#f0f0f0] bg-[radial-gradient(#00000005_1px,transparent_1px)] [background-size:16px_16px] p-4 sm:p-6 md:p-8">
      <header className="w-full max-w-[900px] mx-auto mb-8 px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center py-6">
          Task Manager
        </h1>
      </header>
      {error && (
        <div className="w-full max-w-[900px] mx-auto mb-4">
          <Alert
            type="error" 
            message={error}
          />
        </div>
      )}
      <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 mb-6">
        <div className="flex justify-end">
          {!error && <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Task
          </button>}
        </div>
      </div>

      <TaskList/>

      <CreateTaskModal
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  )
}

export default App
