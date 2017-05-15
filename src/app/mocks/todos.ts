import {TODO} from "../models/todo";

export const TODOS_MOCK: TODO[] = (function() {
  let todos: TODO[] = [];
  for(let i=0; i<10; i++){
    let k = i+1;
    let t: TODO  = new TODO( "notatka" +k, "2015-05-" + k, "dlugi opis notatki"+k, i%2 == 0);
    t.id = k;
    todos.push(t);
  }
  return todos;
}());
