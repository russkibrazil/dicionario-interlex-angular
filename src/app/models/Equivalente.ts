export class Equivalente{
    public origem : number;
    public equivalente : number;
    public exemplo : string;
    public exemploTraduzido : string;
    public referencia : number;
    public palavraGuia : string;
    public nOrdem : number;

    constructor(origem : number, eqiv : number, ex : string, exT: string, refer : number, pGuia : string, nOrd : number){
        this.origem = origem;
        this.equivalente = eqiv;
        this.exemplo = ex;
        this.exemploTraduzido = exT;
        this.referencia = refer;
        this.palavraGuia = pGuia;
        this.nOrdem = nOrd;
    }
}