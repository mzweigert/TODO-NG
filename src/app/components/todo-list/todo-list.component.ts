import { Component, Inject } from '@angular/core';
import {ITodoService} from "../../interfaces/todo-service-interface";
import {TodoTableHeader} from "../../consts/todo-table-header";
import {TODO} from "../../models/todo";
import {TodoService} from "../../services/todo.service";
import {HTMLHeaders} from "../../consts/html-headers";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  private _html :HTMLHeaders = HTMLHeaders.getHeaders('Welcome to TODO list app!');
  private _todoList: TODO[];
  private _headers: string[];

  constructor(@Inject('ITodoService') private todoService: ITodoService) {
    this._todoList = this.todoService.getAllTodoList();
    this._headers = TodoTableHeader.toStringArray();
  }

  get html():HTMLHeaders{
      return this._html;
  }

  get headers() : string[] {
    return this._headers;
  }

  get todoList():TODO[]{
      return this._todoList;
  }
}
