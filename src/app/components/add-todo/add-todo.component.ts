import { Component, OnInit, Inject } from '@angular/core';
import {ITodoService} from "../../interfaces/todo-service-interface";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(@Inject('ITodoService') private todoService: ITodoService) { }

  ngOnInit() {

  }

}
