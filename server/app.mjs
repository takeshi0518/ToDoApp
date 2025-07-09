import express from 'express';
import env from 'dotenv';
import cors from 'cors';

import './helpers/db.mjs';
import apiRoutes from './api-routes/index.mjs';

env.config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use(express.json());

app.use('/api', apiRoutes);

app.use((req, res) => {
  res.status(404).json({ msg: 'Page Not Found.' });
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ msg: '不正なエラーが発生しました' });
});

app.listen(PORT, () => console.log(`Server Start -> http://localhost:${PORT}`));
