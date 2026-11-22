// The lab 6 todo routes read and change the todos collection
import TodosDao from "./dao";
export default function TodoRoutes(app) {
  const dao = TodosDao();
  const findTodos = async (req, res) => {
    const { completed } = req.query;
    if (completed !== undefined) {
      const todos = await dao.findCompletedTodos(completed === "true");
      res.json(todos);
      return;
    }
    const todos = await dao.findAllTodos();
    res.json(todos);
  };
  const findTodoById = async (req, res) => {
    const todo = await dao.findTodoById(req.params.id);
    res.json(todo);
  };
  const createTodo = async (req, res) => {
    const todo = await dao.createTodo(req.body);
    res.json(todo);
  };
  const updateTodo = async (req, res) => {
    const status = await dao.updateTodo(req.params.id, req.body);
    res.send(status);
  };
  const deleteTodo = async (req, res) => {
    const status = await dao.deleteTodo(req.params.id);
    res.send(status);
  };
  app.get("/lab6/todos", findTodos);
  app.get("/lab6/todos/:id", findTodoById);
  app.post("/lab6/todos", createTodo);
  app.put("/lab6/todos/:id", updateTodo);
  app.delete("/lab6/todos/:id", deleteTodo);
}
