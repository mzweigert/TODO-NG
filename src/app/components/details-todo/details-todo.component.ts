import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {TodoTableHeader} from "../../consts/todo-table-header";
import {TODO} from "../../models/todo";
import {ITodoService} from "../../interfaces/todo-service-interface";
import {HTMLHeaders} from "../../consts/html-headers";

@Component({
  selector: 'app-details-todo',
  templateUrl: './details-todo.component.html',
  styleUrls: ['./details-todo.component.css']
})
export class DetailsTodoComponent implements OnInit, OnDestroy {

  private _html: HTMLHeaders = HTMLHeaders.getHeaders('Details Todo');
  private _todoDetails: Object[] = [];
  private _id: number;
  private _sub: any;

  constructor(@Inject('ITodoService') private _todoService: ITodoService, private _route: ActivatedRoute,
              private _router: Router) {

  }

  ngOnInit() {
    this._sub = this._route.params.subscribe(params => {
      if(!Number(params['id'])){
        this._router.navigate(['/todo-list']);
        return;
      }

      let _todo =  this._todoService.getById(+params['id']);
      if(!_todo){
        this._router.navigate(['/todo-list']);
        return;
      }

      this._id = +params['id'];

      let _keys = (<any>Object).keys(_todo),
          _keyToCapital = (key: string) : string => key.charAt(1).toUpperCase() + key.substr(2),
          _booleanToWord = (bool: boolean) : string => bool? 'Yes' : 'No',
          _checkIfBoolean = (value: any) : string => typeof value === 'boolean'? _booleanToWord(value) : value;

      _keys.forEach((k)  => {
        this._todoDetails.push({ key: _keyToCapital(k), value: _checkIfBoolean(_todo[k]) });
      });

    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  get html():HTMLHeaders{
    return this._html;
  }


  get todoDetails():Object[]{
      return this._todoDetails;
      }

  get id():number{
      return this._id;
      }
}
