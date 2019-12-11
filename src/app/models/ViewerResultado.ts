export class EquivalenteProc{
    nApresentacao : number;
    Lema_Eq : string;
    Exemplo : string;
    Exemplo_Traduzido : string;
    MarcaUso : string;
    Referencia : number;

    constructor(nAp : number, lema : string, ex : string, exT : string, marca : string, refer : number){
        this.nApresentacao = nAp;
        this.Lema_Eq = lema;
        this.Exemplo = ex;
        this.Exemplo_Traduzido = exT;
        this.MarcaUso = marca;
        this.Referencia = refer;
    }
}
export abstract class ViewerResultado {

    idPalavra : number;
    lema: string;
    cGram : string;
    listaEq : EquivalenteProc[];

}