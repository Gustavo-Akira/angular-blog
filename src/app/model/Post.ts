export class Post{
    constructor(id, name, mensagem){
        this.id = id;
        this.name = name;
        this.mensagem = mensagem;
    }
    id?:String;
    name:String;
    mensagem:String;
}