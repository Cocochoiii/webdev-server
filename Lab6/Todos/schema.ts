// The todo schema describes one document in the lab 6 todos collection
import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { collection: "todos" },
);
export default schema;
