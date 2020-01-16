export class Palavra{
    public Id : number;
    public Lema: string;
    public ClasseGram: string;
    public Idioma: string;
    public notas_gramatica : string;
    public notas_cultura : string;
    public Genero : string;
    public Definicao : string;
    
    public Sinonimo1: number;
    public Sinonimo2 : number;
    public Sublema : string;

    constructor(id: number, lema:string, cg : string, idioma: string, notag : string, notac : string, genero : string, definicao : string){
        this.Id = id;
        this.Lema = lema;
        this.ClasseGram = cg;
        this.Idioma = idioma;
        this.notas_gramatica = notag;
        this.notas_cultura = notac;
        this.Genero = genero;
        this.Definicao = definicao;
    }
}