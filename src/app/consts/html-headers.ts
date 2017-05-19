export class HTMLHeaders {
  private _title: string = 'Welcome';
  private _btnAddTitle: string  = 'Add TODO';
  private _add:string = 'Add';
  private _home: string = 'Home';
  private _details: string = 'Details';
  private _remove: string = 'Remove';
  private _edit: string = 'Edit';

  static getHeaders(_title?, _btnAddTitle?,_add?, _details?, _remove?, _edit?) : HTMLHeaders {
    let headers: HTMLHeaders = new HTMLHeaders();
    headers._title = _title || headers._title;
    headers._btnAddTitle = _btnAddTitle || headers._btnAddTitle;
    headers._add = _add || headers._add;
    headers._details = _details || headers._details;
    headers._remove = _remove || headers._remove;
    headers._edit = _edit || headers._edit;

    return headers;
  };


  get title():string{
      return this._title;
      }

  get home():string{
      return this._home;
      }

  get btnAddTitle():string{
      return this._btnAddTitle;
      }
  get add():string{
    return this._add;
  }

  get details():string{
    return this._details;
  }

  get remove():string{
      return this._remove;
      }

  get edit():string{
      return this._edit;
      }
};


