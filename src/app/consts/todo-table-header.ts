export const TodoTableHeader = {
    id: "Id",
    title: "Title",
    complete: "Complete?",
    details: "Details",
    remove: "Remove",
    edit: "Edit",

    toStringArray(): string[] {
      let arr = [];
      for(let key in this){
        if(! (Object.prototype.toString.call(this[key]) == '[object Function]' )){
          arr.push(this[key]);
        }
      }
      return arr;
    }
};
