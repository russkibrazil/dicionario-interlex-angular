export class ConjugacaoEn{
    public readonly id : number;
    public constrPresente : string;
    public exPresente : string;
    public constrPassado : string;
    public exPassado : string;
    public constrWill : string;
    public exWill : string;
    public constrGoingTo : string;
    public exGoingTo : string;
    public constrPresPer : string;
    public exPresPer : string;
    public constrPasPer : string;
    public exPasPer : string;
    public constrPresCon : string;
    public exPresCon : string;
    public constrPasCon : string;
    public exPasCon : string;

    constructor(id : number){
        this.id = id;
    }

    public adicionarPresente(construcao: string, exemplo: string){
        this.constrPresente = construcao;
        this.exPresente = exemplo;
    }

    public adicionarPassado(construcao: string, exemplo: string){
        this.constrPassado = construcao;
        this.exPassado = exemplo;
    }

    public adicionarWill(construcao: string, exemplo: string){
        this.constrWill = construcao;
        this.exWill = exemplo;
    }

    public adicionarGoingTo(construcao: string, exemplo: string){
        this.constrGoingTo = construcao;
        this.exGoingTo = exemplo;
    }

    public adicionarPresPer(construcao: string, exemplo: string){
        this.constrPresPer = construcao;
        this.exPresPer = exemplo;
    }

    public adicionarPasPer(construcao: string, exemplo: string){
        this.constrPasPer = construcao;
        this.exPasPer = exemplo;
    }

    public adicionarPresCon(construcao: string, exemplo: string){
        this.constrPresCon = construcao;
        this.exPresCon = exemplo;
    }

    public adicionarPasCon(construcao: string, exemplo: string){
        this.constrPasCon = construcao;
        this.exPasCon = exemplo;
    }
}