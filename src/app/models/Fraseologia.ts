export class Fraseologia{
    public idPalavra : number;
    public fraseOrig : string;
    public fraseEquiv : string;
    public exemploOriginal : string;
    public exemploEquivalente : string;
    public notasCultura : string;
    public notasGramatica : string;
    public categoria : string;

    constructor(id : number, fOrig : string, fEquiv : string, eOrig : string, eEquiv : string, nCultural : string, nGramatical : string, cat : string){
        this.idPalavra = id;
        this.fraseOrig = fOrig;
        this.fraseEquiv = fEquiv;
        this.exemploOriginal = eOrig;
        this.exemploEquivalente = eEquiv;
        this.notasCultura = nCultural;
        this.notasGramatica = nGramatical;
        this.categoria= cat;
    }
}