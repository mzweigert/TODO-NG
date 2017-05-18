export class TODO {

    private _id: number;
    private _title: string;
    private _createDate: Date;
    private _description: string;
    private _complete: boolean;

    constructor(title:string, createDate:Date, description:string, complete:boolean, id?:number) {
        this._title = title;
        this._createDate = createDate;
        this._description = description;
        this._complete = complete;
        this._id = id;
    }

    get id():number{
      return this._id;
    }

    set id(value:number){
        this._id=value;
    }

    get title():string{
        return this._title;
    }

    set title(value:string){
        this._title=value;
    }

    get createDate():Date{
        return this._createDate;
    }

    set createDate(value:Date){
        this._createDate=value;
    }

    get description():string{
        return this._description;
    }

    set description(value:string){
        this._description=value;
    }

    get complete():boolean{
        return this._complete;
    }

    set complete(value:boolean){
        this._complete=value;
    }
}
