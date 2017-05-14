import {TODO} from "../models/todo";

export interface ITodoService {
  getAllTodoList() : TODO[];
  addTodo(todo: TODO): TODO
  removeTodo(id: number): boolean;
  getById(id: number): TODO;
  editTodo(todo: TODO): TODO;
}
