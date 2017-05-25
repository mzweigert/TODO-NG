import {TODO} from "../models/todo";
import {TodoService} from "../services/todo.service";

export interface ITodoService {
  getTodos() : TODO[];
  getListSize() : number;
  resetTodos() :  TODO[];
  filterByOffsetAndLimit(_offset, _limit) : TODO[];
  filterByHeadersAndValues(map: Map<string, any>) : TODO[];
  addTodo(todo: TODO): TODO
  removeTodo(id: number): boolean;
  getById(id: number): TODO;
  editTodo(todo: TODO): TODO;
}
