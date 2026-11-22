// Lab 6 reports the database connection and loads the todos routes
import mongoose from "mongoose";
import TodoRoutes from "./Todos/routes";
export default function Lab6(app) {
  app.get("/lab6/status", (req, res) => {
    res.json({ connected: mongoose.connection.readyState === 1 });
  });
  TodoRoutes(app);
}
