export class HTMLHeaders {
  private _title: string = 'Welcome';
  private _backToHome: string = 'Home';
  private _btnAddTitle: string  = 'add TODO';
  private _remove: string = 'remove';
  private _edit: string = 'edit';

  static getHeaders(_title?, _backToHome?, _btnAddTitle?, _remove?, _edit?) : HTMLHeaders {
    let headers: HTMLHeaders = new HTMLHeaders();
    headers._title = _title || headers._title;
    headers._backToHome = _backToHome || headers._backToHome;
    headers._btnAddTitle = _btnAddTitle || headers._btnAddTitle;
    headers._remove = _remove || headers._remove;
    headers._edit = _edit || headers._edit;

    return headers;
  };


  get title():string{
      return this._title;
      }

  get backToHome():string{
      return this._backToHome;
      }

  get btnAddTitle():string{
      return this._btnAddTitle;
      }

  get remove():string{
      return this._remove;
      }

  get edit():string{
      return this._edit;
      }
};


