export class Referencia{
    public id : number;
    public Cod : string;
    public descricao : string;
    public ano : number;
    public autor : string;

    constructor(id : number, cod : string, desc : string, ano: number, autor : string){
        this.id = id;
        this.Cod = cod;
        this.descricao = desc;
        this.ano = ano;
        this.autor = autor;
    }
}