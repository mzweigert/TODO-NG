import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { TodoListComponent } from '../todo-list/todo-list.component';
import {ITodoService} from "../../interfaces/todo-service-interface";
import {TodoService} from "../../services/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
