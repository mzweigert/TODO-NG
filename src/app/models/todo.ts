export class TODO {

    private _id: number;
    private _title: string;
    private _createDate: string;
    private _description: string;
    private _done: boolean;

    constructor(title:string, createDate:string, description:string, done:boolean) {
        this._title = title;
        this._createDate = createDate;
        this._description = description;
        this._done = done;
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

    get createDate():string{
        return this._createDate;
    }

    set createDate(value:string){
        this._createDate=value;
    }

    get description():string{
        return this._description;
    }

    set description(value:string){
        this._description=value;
    }

    get done():boolean{
        return this._done;
    }

    set done(value:boolean){
        this._done=value;
    }
}
