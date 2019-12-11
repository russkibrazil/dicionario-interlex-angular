export class MostraEquivalenciasConjugacaoView{
    public readonly Id : number;
    public readonly Lema : string;
    public readonly notas_cultura : string;
    public readonly notas_gramatica : string;
    public readonly n_Apresentacao : number;
    public readonly PGUia : string;
    public readonly Exemplo : string;
    public readonly Exemplo_Traduzido : string;
    public readonly ConstrGoingTo : string;
    public readonly ConstrPasCon : string;
    public readonly ConstrPasPer : string;
    public readonly ConstrPassado : string;
    public readonly ConstrPresCon : string;
    public readonly ConstrPresente : string;
    public readonly ConstrPresPer : string;
    public readonly ConstrWill : string;
    public readonly ExGoingTo : string;
    public readonly ExPasCon : string;
    public readonly ExPasPer : string;
    public readonly ExPassado : string;
    public readonly ExPresCon : string;
    public readonly ExPresente : string;
    public readonly ExPresPer : string;
    public readonly ExWill : string;

    constructor(a1 : number, a2 : string, a3 : string, a4 : string, a5 :number, a6 : string, a7 : string, a8  : string, a9  : string, a10 : string, a11 : string, a12 : string, a13 : string, a14 : string, a15 : string, a16 : string, a17 : string, a18 : string, a19 : string, a20 : string, a21 : string, a22 : string, a23 : string, a24 : string){
        this.Id = a1;
        this.Lema = a2;
        this.notas_cultura = a3;
        this.notas_gramatica = a4;
        this.n_Apresentacao = a5;
        this.PGUia = a6;
        this.Exemplo = a7;
        this.Exemplo_Traduzido = a8;
        this.ConstrGoingTo = a9;
        this.ConstrPasCon = a10;
        this.ConstrPasPer = a11;
        this.ConstrPassado = a12;
        this.ConstrPresCon = a13;
        this.ConstrPresente = a14;
        this.ConstrPresPer = a15;
        this.ConstrWill = a16;
        this.ExGoingTo  = a17;
        this.ExPasCon = a18;
        this.ExPasPer = a19;
        this.ExPassado = a20;
        this.ExPresCon = a21;
        this.ExPresente = a22;
        this.ExPresPer = a23;
        this.ExWill = a24;
    }
}