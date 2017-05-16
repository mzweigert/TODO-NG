import {TODO} from "../models/todo";

export interface ITodoService {
  getAllTodoList() : TODO[];
  getListSize() : number;
  getTodosByOffsetAndLimit(_offset, _limit) : TODO[];
  addTodo(todo: TODO): TODO
  removeTodo(id: number): boolean;
  getById(id: number): TODO;
  editTodo(todo: TODO): TODO;
}
