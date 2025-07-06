import express from 'express';
import env from 'dotenv';

env.config();
const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  res.send({ msg: 'ToDoApp' });
});

app.listen(PORT, () => console.log(`Server Start: http://localhost:${PORT}`));
