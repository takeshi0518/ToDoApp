import { Schema, model } from 'mongoose';

const todoSchema = Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = model('Todo', todoSchema);

export default Todo;
