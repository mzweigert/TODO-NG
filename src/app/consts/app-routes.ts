import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTodoComponent} from "../components/add-todo/add-todo.component";
import {PageNotFoundComponent} from "../components/page-not-found/page-not-found.component";
import {TodoListComponent} from "../components/todo-list/todo-list.component";
import {AppComponent} from "../components/app/app.component";

export const routes : Routes = [
  { path: 'todo-list', component: TodoListComponent },
  { path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full'
  },
  { path: 'add', component: AddTodoComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

