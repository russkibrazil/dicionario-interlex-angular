export class MostraPalavraEquivalenciasView{
    public readonly Id : number;
    public readonly Lema: string;
    public readonly Genero : string;
    public readonly Definicao : string;
    public readonly nApresentacao : number;
    public readonly Lema_Eq : string;
    public readonly Exemplo : string;
    public readonly Exemplo_Traduzido : string;
    public readonly Marca_Uso : string;
    public readonly Referencia : number;

    constructor(a1 : number, a2 : string, a3 : string, a4 : string, a5 : number, a6 : string, a7 : string, a8: string, a9: string, a10 : number){
        this.Id = a1;
        this.Lema = a2;
        this.Genero = a3;
        this.Definicao = a4;
        this.nApresentacao = a5;
        this.Lema_Eq = a6;
        this.Exemplo = a7;
        this.Exemplo_Traduzido = a8;
        this.Marca_Uso = a9;
        this.Referencia = a10;
    }
}