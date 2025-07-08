import express from 'express';

import { body } from 'express-validator';
import { requestErrorHandler } from '../helpers/helper.mjs';
import {
  registTodo,
  updateTodo,
  getAllTodos,
  deleteTodo,
} from '../controllers/books.mjs';

const router = express.Router();

router.get('/', requestErrorHandler(getAllTodos));

router.post('/', body('content').notEmpty(), requestErrorHandler(registTodo));

router.patch(
  '/:id',
  body('content').notEmpty(),
  requestErrorHandler(updateTodo)
);

router.delete('/:id', requestErrorHandler(deleteTodo));

export default router;
