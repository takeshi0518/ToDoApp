import express from 'express';
import env from 'dotenv';
import './helpers/db.mjs';

import apiRoutes from './api-routes/index.mjs';

env.config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`Server Start: http://localhost:${PORT}`));
