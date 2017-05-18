import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {ITodoService} from "../../interfaces/todo-service-interface";
import {TODO} from "../../models/todo";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {HTMLHeaders} from "../../consts/html-headers";
import {IConflictResolver} from "../../interfaces/conflict-resolver-interface";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit, OnDestroy {

  private _sub: any;
  private _id: number;

  private _todoForm: FormGroup;
  private _html :HTMLHeaders = HTMLHeaders.getHeaders('Add Todo');
  private _todo : TODO;

  constructor(@Inject('ITodoService') private _todoService: ITodoService, private _route: ActivatedRoute,
              private _router: Router, @Inject('IConflictResolver') private _conflictResolver: IConflictResolver,
              private _fb: FormBuilder) {

  }

  ngOnInit():void {
    this._sub = this._route.params.subscribe(params => {
      this._conflictResolver.checkIfIdIsNumberType(this._router, params);

      this._todo = this._todoService.getById(+params['id']);
      if (!this._todo) {
        this._router.navigate(['/todo-list']);
        return;
      }

      this._id = this._todo.id;

      this._todoForm = this._fb.group({
        'id' : this._todo.id,
        'title' : this.initialFormControl(this._todo.title),
        'createDate' : this.initialFormControl(this._conflictResolver.toYYYYMMDD(this._todo.createDate)),
        'description' : this.initialFormControl(this._todo.description),
        'complete': this._todo.complete
      });
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  private initialFormControl(_value: any) : Object[] {
    return [_value, Validators.compose([Validators.required, Validators.minLength(3)])];
  }

  submitTodo(value: any) {
    this._todo.title = value.title;
    this._todo.description = value.description;
    this._todo.createDate = value.createDate;
    this._todo.complete = value.complete;
    this._todoService.editTodo(this._todo);
    this._router.navigate(['todo-list']);
  }

  get todoForm():FormGroup {
    return this._todoForm;
  }

  get html():HTMLHeaders{
    return this._html;
  }
}
