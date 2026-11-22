// The module model reads and writes the modules collection with the schema
import mongoose from "mongoose";
import schema from "./schema";
const model = mongoose.model("ModuleModel", schema);
export default model;
