export class Referencia{
    public Id : number;
    public Cod : string;
    public Descricao : string;
    public Ano : number;
    public Autor : string;

    constructor(id : number, cod : string, desc : string, ano: number, autor : string){
        this.Id = id;
        this.Cod = cod;
        this.Descricao = desc;
        this.Ano = ano;
        this.Autor = autor;
    }
}