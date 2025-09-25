import express from 'express';

import { body } from 'express-validator';
import { requestErrorHandler } from '../helpers/helper.mjs';
import {
  registTodo,
  updateTodo,
  getAllTodos,
  deleteTodo,
} from '../controllers/todos.mjs';
import { requireLogin } from '../helpers/auth.mjs';

const router = express.Router();

router.get('/', requireLogin, requestErrorHandler(getAllTodos));

router.post(
  '/',
  requireLogin,
  body('content').notEmpty(),
  requestErrorHandler(registTodo)
);

router.patch(
  '/:id',
  requireLogin,
  body('content').notEmpty(),
  requestErrorHandler(updateTodo)
);

router.delete('/:id', requireLogin, requestErrorHandler(deleteTodo));

export default router;
