import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { TodoListComponent } from '../todo-list/todo-list.component';
import {ITodoService} from "../../interfaces/todo-service-interface";
import {TodoService} from "../../services/todo.service";
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { DetailsTodoComponent } from '../details-todo/details-todo.component';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { RemoveTodoComponent } from '../remove-todo/remove-todo.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


import { AppRoutes } from "../../consts/app-routes";
import {ConflictResolverService} from "../../services/conflict-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent,
    DetailsTodoComponent,
    EditTodoComponent,
    RemoveTodoComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [{ provide: 'ITodoService', useClass: TodoService },
              { provide: 'IConflictResolver', useClass: ConflictResolverService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
