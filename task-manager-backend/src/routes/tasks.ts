import express, { Request, Response, RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';


interface Task {
  id: string;
  title: string;
  status: 'pending' | 'completed';
}

type PatchTaskParams = {
  id: string
  status: 'pending' |  'completed'
};

type DeleteTaskParams = {
  id: string
};

const tasks: Task[] = [];
const router = express.Router();

router.get('/', (req, res) => {
  res.json(tasks);
});

router.post('/', (req: any, res: any) => {
  const { title } = req.body;
  // Validate title
  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({ error: 'Title must be a non-empty string' });
  }

  const newTask: Task = {
    id: uuidv4(),
    title: title.trim(),
    status: 'pending',
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});


router.patch('/:id/:status', (req: Request<PatchTaskParams>, res: any) => {
  const { id } = req.params;
  const { status } = req.params;

  // Validate the status
  if (status !== 'pending' && status !== 'completed') {
    return res.status(400).json({ error: 'Invalid status' });
  }

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // Update the task status
  task.status = status;

  res.json(task);
});



router.delete('/:id', (req: Request<DeleteTaskParams>, res: any) => {
  const { id } = req.params;
  
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

export default router;