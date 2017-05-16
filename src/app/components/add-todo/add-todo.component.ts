import { Component, Inject, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {ITodoService} from "../../interfaces/todo-service-interface";
import {TODO} from "../../models/todo";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {HTMLHeaders} from "../../consts/html-headers";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  private _todoForm: FormGroup;
  private _html :HTMLHeaders = HTMLHeaders.getHeaders('Add Todo');

  constructor(@Inject('ITodoService') private todoService: ITodoService, private _fb: FormBuilder,
              private _router: Router) {
    this._todoForm = this._fb.group({
      'title' : this.initialFormControl,
      'createDate' : this.initialFormControl,
      'description' : this.initialFormControl
    });
  }

  private initialFormControl : Object[] = ['', Validators.compose([Validators.required, Validators.minLength(3)])];

  submitTodo(value: any) {
    this.todoService.addTodo(new TODO(value.title, value.createDate, value.description, false));
    this._router.navigate(['todo-list']);
  }

    get todoForm():FormGroup {
      return this._todoForm;
    }

  get html():HTMLHeaders{
      return this._html;
      }
}
