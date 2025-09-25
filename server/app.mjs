import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import env from 'dotenv';
import cors from 'cors';
import session from 'express-session';

import './helpers/db.mjs';
import apiRoutes from './api-routes/index.mjs';

env.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;

const app = express();

app.use(
  cors({
    // origin: 'http://localhost:5173',
    origin: 'https://todoapp-apl5.onrender.com',
    credentials: true,
  })
);
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'dev-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.use('/api', apiRoutes);

app.use('/api', (req, res) => {
  res.status(404).json({ msg: 'API endpoint not found' });
});

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  if (path.extname(req.path)) return next();
  const indexPath = path.resolve(__dirname, '../client/dist/index.html');
  res.sendFile(indexPath);
});
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
