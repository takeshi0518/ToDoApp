import express from 'express';

import todosRouter from './todos.mjs';

const router = express.Router();
router.use('/todos', todosRouter);

export default router;
