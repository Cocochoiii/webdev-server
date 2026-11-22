// The todos DAO practices every Mongoose CRUD call on a small collection
import model from "./model";
import { v4 as uuidv4 } from "uuid";
export default function TodosDao() {
  const findAllTodos = () => model.find();
  const findCompletedTodos = (completed) => model.find({ completed });
  const findTodoById = (todoId) => model.findById(todoId);
  const createTodo = (todo) => model.create({ ...todo, _id: uuidv4() });
  const updateTodo = (todoId, todo) =>
    model.updateOne({ _id: todoId }, { $set: todo });
  const deleteTodo = (todoId) => model.deleteOne({ _id: todoId });
  return {
    findAllTodos, findCompletedTodos, findTodoById,
    createTodo, updateTodo, deleteTodo,
  };
}
