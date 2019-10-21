export class Equivalente{
    public Origem : number;
    public equivalente : number;
    public Exemplo : string;
    public Exemplo_Traduzido : string;
    public Referencia : number;
    public PGuia : string;
    public nApresentacao : number;


    constructor(origem : number, eqiv : number, ex : string, exT: string, refer : number, pGuia : string, nOrd : number){
        this.Origem = origem;
        this.equivalente = eqiv;
        this.Exemplo = ex;
        this.Exemplo_Traduzido = exT;
        this.Referencia = refer;
        this.PGuia = pGuia;
        this.nApresentacao = nOrd;
    }
}