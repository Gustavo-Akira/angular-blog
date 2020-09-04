export class Post{
    constructor(id, name, mensage){
        this.id = id;
        this.name = name;
        this.mensage = mensage;
    }
    id?:String;
    name:String;
    mensage:String;
}