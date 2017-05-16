import { Component, Inject, OnInit } from '@angular/core';
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
export class TodoListComponent implements OnInit {
  private _html :HTMLHeaders = HTMLHeaders.getHeaders('Welcome to TODO list app!');
  private _todoList: TODO[];
  private  _headers: string[];
  private _pagesSizeArray: number[];
  private _todosPerPage: number = 5;
  private _currentPage: number = 1;
  private _pagesSize: number;


  constructor(@Inject('ITodoService') private todoService: ITodoService) {
  }

  ngOnInit(){
    this._todoList = this.todoService.getAllTodoList();
    this._headers = TodoTableHeader.toStringArray();
    this._pagesSize =  Math.ceil(this.todoService.getListSize() / this._todosPerPage);
    this._pagesSizeArray = Array.apply(null, {length: this._pagesSize}).map((e, i) => i+1);
    this._currentPage = 1;
    this.refreshTodos();
  }

  refreshTodos() : void {
    this._todoList = this.todoService.getTodosByOffsetAndLimit((this._currentPage - 1) * this._todosPerPage, this._todosPerPage * this._currentPage);
  }
  setPage(index : any){
    this._currentPage = index;
    this.refreshTodos();
  }
  prevPage(){
    this._currentPage--;
    this.refreshTodos();
  }

  nextPage(){
    this._currentPage++;
    this.refreshTodos();
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


  get pagesSizeArray():number[]{
      return this._pagesSizeArray;
      }

  get todosPerPage():number{
      return this._todosPerPage;
      }

  get currentPage():number{
      return this._currentPage;
      }

  get pagesSize():number{
      return this._pagesSize;
      }
}
