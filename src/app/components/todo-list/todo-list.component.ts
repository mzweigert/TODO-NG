import { Component, OnInit, Inject } from '@angular/core';
import {ITodoService} from "../../interfaces/todo-service-interface";
import {TodoTableHeader} from "../../consts/todo-table-header";
import {TODO} from "../../models/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {

  private _todoList: TODO[];
  private _headers: string[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this._todoList = this.todoService.getAllTodoList();
    this._headers = TodoTableHeader.toStringArray();
  }

  get headers() : string[] {
    return this._headers;
  }

  get todoList():TODO[]{
      return this._todoList;
  }
}
