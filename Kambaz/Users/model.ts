// The user model reads and writes the users collection with the schema
import mongoose from "mongoose";
import schema from "./schema";
const model = mongoose.model("UserModel", schema);
export default model;
