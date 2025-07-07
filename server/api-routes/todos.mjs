import express from 'express';
import Todo from '../models/todo.mjs';

const router = express.Router();

router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});
export default router;
