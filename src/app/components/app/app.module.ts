import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { TodoListComponent } from '../todo-list/todo-list.component';
import {ITodoService} from "../../interfaces/todo-service-interface";
import {TodoService} from "../../services/todo.service";
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AppRoutes } from "../../consts/app-routes";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [{provide: 'ITodoService', useClass: TodoService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
