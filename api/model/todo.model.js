import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Todo = model("Todo", todoSchema);

export default Todo;
