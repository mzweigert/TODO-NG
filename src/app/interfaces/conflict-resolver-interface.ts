import {Router} from "@angular/router";
export interface IConflictResolver {
  checkIfIdIsNumberType(_router: Router, _params: any): void;
  toYYYYMMDD(_date: Date) : void;
  keyToCapital(_key: string) : string;
  booleanToWord(bool: boolean) : string;
  wordToBooleanString(word:any) : string;
  checkIfBooleanOrDate(value: any) : string
}
