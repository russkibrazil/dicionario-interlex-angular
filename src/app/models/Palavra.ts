export class Palavra{
    public id : number;
    public lema: string;
    public ClasseGram: string;
    public idioma: string;
    public notasGramatica : string;
    public notaCultura : string;
    public Genero : string;
    public Definicao : string;

    constructor(id: number, lema:string, cg : string, idioma: string, notag : string, notac : string, genero : string, definicao : string){
        this.id = id;
        this.lema = lema;
        this.ClasseGram = cg;
        this.idioma = idioma;
        this.notasGramatica = notag;
        this.notaCultura = notac;
        this.Genero = genero;
        this.Definicao = definicao;
    }
}