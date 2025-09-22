import { validationResult } from 'express-validator';
import Todo from '../models/todo.mjs';

const getAllTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.session.user_id }).sort({
    updatedAt: -1,
  });
  res.json(todos);
};

const registTodo = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }

  const todo = new Todo({
    ...req.body,
    userId: req.session.user_id,
  });
  const newTodo = await todo.save();
  res.status(201).json(newTodo);
};

const deleteTodo = async (req, res) => {
  const _id = req.params.id;
  const { deletedCount } = await Todo.deleteOne({
    _id,
    userId: req.session.user_id,
  });
  if (deletedCount === 0)
    return res.status(404).json({ msg: 'Target Todo Not found.' });
  res.json({ msg: 'Delete succeeded.' });
};

const updateTodo = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }

  const { content } = req.body;
  const _id = req.params.id;
  const todo = await Todo.findOne({
    _id,
    userId: req.session.user_id,
  });
  if (todo === null) return res.status(404).json({ msg: 'Page Not Found.' });
  if (content !== undefined) todo.content = content;
  await todo.save();
  res.json(todo);
};

export { registTodo, updateTodo, getAllTodos, deleteTodo };
