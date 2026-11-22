// The module schema keeps a course id so modules stay separate
import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    description: String,
    course: String,
    lessons: [{ _id: String, name: String, description: String }],
  },
  { collection: "modules" },
);
export default schema;
