import express from 'express';
import Todo from '../models/todo.mjs';

const router = express.Router();

router.get('/', async (req, res) => {
  const todos = await Todo.find().sort({ updatedAt: -1 });
  res.json(todos);
});
router.post('/', async (req, res) => {
  const book = new Todo(req.body);
  const newBook = await book.save();
  res.json(newBook);
});
router.patch('/:id', async (req, res) => {
  const { content } = req.body;
  const _id = req.params.id;
  const todo = await Todo.findById(_id);
  if (content !== undefined) todo.content = content;
  await todo.save();
  res.json(todo);
});
router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  await Todo.deleteOne({ _id });
  res.json({ msg: 'Delete succeeded.' });
});
export default router;
