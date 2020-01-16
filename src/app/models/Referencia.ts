export class Referencia{
    public Cod : string;
    public Descricao : string;
    public Ano : number;
    public Autor : string;

    constructor(cod : string, desc : string, ano: number, autor : string){
        this.Cod = cod;
        this.Descricao = desc;
        this.Ano = ano;
        this.Autor = autor;
    }
}