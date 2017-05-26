import {TODO} from "../models/todo";

export const TODOS_MOCK: TODO[] = (function() {
  let todos: TODO[] = [];
  for(let i=0; i<10000; i++){
    let k = i+1;
    let t: TODO  = new TODO( "notatka" +k, new Date("2015-05-" +(k < 10? k: k + "1")) , "dlugi opis notatki"+k, i%2 == 0);
    t.id = k;
    todos.push(t);
  }
  return todos;
}());
