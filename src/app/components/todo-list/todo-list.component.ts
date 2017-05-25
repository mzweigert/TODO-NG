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
  private _paginatedTL: TODO[];
  private  _headers: string[];
  private _pagesSizeArray: number[];
  private _todosPerPage: number = 5;
  private _currentPage: number = 1;
  private _pagesSize: number;
  private _hiddenInputs: Map<string, any> = new Map();


  constructor(@Inject('ITodoService') private todoService: ITodoService) {
  }

  ngOnInit(){
    this._todoList = this.todoService.getTodos();
    this._paginatedTL = this._todoList;
    this._headers = TodoTableHeader.toStringArray();
    this.initPages();
    this.paginate();
  }

  initPages() : void {
    this._pagesSize =  Math.ceil(this._todoList.length / this._todosPerPage);
    this._pagesSizeArray = Array.apply(null, {length: this._pagesSize}).map((e, i) => i+1);
    this._currentPage = 1;
  }

  getOffset() : number {
    return (this._currentPage - 1) * this._todosPerPage;
  }
  getLimit() : number {
    return this._todosPerPage * this._currentPage;
  }
  paginate() : void {
    this._paginatedTL = this._todoList.slice(this.getOffset(), this.getLimit());
  }
  setPage(index : any){
    this._currentPage = index;
    this.paginate();
  }
  prevPage(){
    this._currentPage--;
    this.paginate();
  }

  nextPage(){
    this._currentPage++;
    this.paginate();
  }

  showOrHideInput(header : string){
    if(this._hiddenInputs.has(header)){
      this.findByValue(header, '');
      this._hiddenInputs.delete(header);
    } else {
      this._hiddenInputs.set(header, null);
    }
  }

  findByValue(header: string, value: string){
    this._hiddenInputs.set(header, value !== ''? value : null);
    this._todoList = this.todoService.filterByHeadersAndValues(this._hiddenInputs);
    this.initPages();
    this.paginate();
  }

  get html():HTMLHeaders{
      return this._html;
  }

  get headers() : string[] {
    return this._headers;
  }

  get paginatedTL():TODO[]{
      return this._paginatedTL;
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


  get hiddenInputs(): Map<string, any>{
      return this._hiddenInputs;
      }
}
