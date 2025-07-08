import express from 'express';
import { body } from 'express-validator';

import {
  registTodo,
  updateTodo,
  getAllTodos,
  deleteTodo,
} from '../controllers/books.mjs';

const router = express.Router();

router.get('/', getAllTodos);

router.post('/', body('content').notEmpty(), registTodo);

router.patch('/:id', body('content').notEmpty(), updateTodo);

router.delete('/:id', deleteTodo);

export default router;
