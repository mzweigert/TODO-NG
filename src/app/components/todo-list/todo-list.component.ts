import { Component, Inject } from '@angular/core';
import {ITodoService} from "../../interfaces/todo-service-interface";
import {TodoTableHeader} from "../../consts/todo-table-header";
import {TODO} from "../../models/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  private _title = 'Welcome to TODO list app!';
  private _btnAddTitle = 'add TODO';
  private _todoList: TODO[];
  private _headers: string[];

  constructor(@Inject('ITodoService') private todoService: ITodoService) {
    this._todoList = this.todoService.getAllTodoList();
    this._headers = TodoTableHeader.toStringArray();
  }

  get title():string{
      return this._title;
  }

  get btnAddTitle():string{
      return this._btnAddTitle;
  }

  get headers() : string[] {
    return this._headers;
  }

  get todoList():TODO[]{
      return this._todoList;
  }
}
