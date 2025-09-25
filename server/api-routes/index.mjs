import express from 'express';

import todosRouter from './todos.mjs';
import authRouter from './auth.mjs';

const router = express.Router();
router.use('/todos', todosRouter);
router.use('/auth', authRouter);

export default router;
