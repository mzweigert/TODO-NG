import { Injectable } from '@angular/core';

import { TODO } from '../models/todo';
import { TODOS_MOCK } from '../mocks/todos';
import {ITodoService} from "../interfaces/todo-service-interface";

@Injectable()
export class TodoService implements ITodoService {

  private todos: TODO[];

  constructor() {
    this.todos = TODOS_MOCK;
  }

  getAllTodoList () : TODO[] {
    return this.todos;
  }

  getListSize() : number {
    return this.todos.length;
  }

  getTodosByOffsetAndLimit(_offset, _limit) : TODO[]{
    return this.todos.slice(_offset, _limit);
  }

  addTodo (todo: TODO) : TODO {
    todo.id = this.todos.length ? this.todos[this.todos.length -1].id + 1 : 1;
    this.todos.push(todo);
    return todo
  };

  removeTodo (id: number) : boolean {
    this.todos = this.todos.filter((e) => e.id !== id);
    return this.getById(id) != null;
  };

  getById (id: number) : TODO {
    return this.todos.find((e) => e.id === id);
  };

  editTodo (todo: TODO) : TODO {
    this.todos.forEach((e, i) => { if(e.id == todo.id) { this.todos[i] = todo; } });
    return todo;
  }
}
