import { Injectable, Inject } from '@angular/core';

import { TODO } from '../models/todo';
import { TODOS_MOCK } from '../mocks/todos';
import {ITodoService} from "../interfaces/todo-service-interface";
import {IConflictResolver} from "../interfaces/conflict-resolver-interface";

@Injectable()
export class TodoService implements ITodoService {

  private todos: TODO[] = [];

  constructor(@Inject('IConflictResolver') private _conflictResolver : IConflictResolver) {
    this.todos = TODOS_MOCK;
  }

  getTodos () : TODO[] {
    return this.todos;
  }

  getListSize() : number {
    return this.todos.length;
  }

  resetTodos() :  TODO[] {
    this.todos = TODOS_MOCK;
    return this.todos;
  }
  filterByOffsetAndLimit(_offset, _limit) : TODO[] {
    return this.todos.slice(_offset, _limit);
  }

  filterByHeadersAndValues(map: Map<string, any>) :  TODO[]{
    let tempTodoList = this.todos;
    map.forEach((val, key) => {
      if(val){

        tempTodoList = tempTodoList.filter((e) => {
          let todoVal = e[key.toLowerCase()];
          return todoVal
            .toString()
            .startsWith(typeof todoVal === 'boolean'?
              this._conflictResolver.wordToBooleanString(val)
              : val);
        });
      }
    });
    return tempTodoList;
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
