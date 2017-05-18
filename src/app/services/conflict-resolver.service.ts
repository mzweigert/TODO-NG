import { Injectable, Inject } from '@angular/core';
import {ITodoService} from "../interfaces/todo-service-interface";
import {Router} from "@angular/router";
import {TODO} from "../models/todo";
import {IConflictResolver} from "../interfaces/conflict-resolver-interface";

@Injectable()
export class ConflictResolverService implements IConflictResolver {

  constructor(@Inject('ITodoService') private _todoService: ITodoService) { }

  keyToCapital(_key:string):string {
    return  _key.charAt(1).toUpperCase() + _key.substr(2);
  }

  booleanToWord(bool:boolean):string {
    return bool? 'Yes' : 'No';
  }

  checkIfBooleanOrDate(value:any):string {
    if(typeof value === 'boolean') {
      return this.booleanToWord(value);
    } else if (value instanceof Date){
      return this.toYYYYMMDD(value);
    }

    return value;
  }


  checkIfIdIsNumberType(_router: Router, _params: any): void {
    if(!Number(_params['id'])){
      _router.navigate(['/todo-list']);
      return;
    }
  }


  toYYYYMMDD(_date: Date) : string {
    _date = new Date(_date);
    var mm = _date.getMonth() + 1;
    var dd = _date.getDate();

    return [_date.getFullYear(),
      (mm>9 ? '' : '0') + mm,
      (dd>9 ? '' : '0') + dd
    ].join('-');
  };

}
