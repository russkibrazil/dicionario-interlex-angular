export class GeradorFiltro{
    private primeiroFiltro : boolean = true;
    private nFiltro : number = 0;
    static stringContem(campo:string, busca:string, negar?:boolean){
        if (!negar){
            return (campo + ',cs,' + busca);
        }else{
            return (campo + ',ncs,' + busca);
        }
    }
    static stringComeca(campo:string, busca:string, negar?:boolean){
        if (!negar){
            return (campo + ',sw,' + busca);
        }else{
            return (campo + ',nsw,' + busca);
        }
    }
    static stringTermina(campo:string, busca:string, negar?:boolean){
        if (!negar){
            return (campo + ',ew,' + busca);
        }else{
            return (campo + ',new,' + busca);
        }
    }
    static igual(campo:string, valor:any, negar?:boolean){
        if (!negar){
            return (campo + ',eq,' + valor);
        }else{
            return (campo + ',neq,' + valor);
        }
    }
    static menor(campo:string, valor:number, negar?:boolean){
        if (!negar){
            return (campo + ',lt,' + valor);
        }else{
            return (campo + ',nlt,' + valor);
        }
    }
    static menorIgual(campo:string, valor:number, negar?:boolean){
        if (!negar){
            return (campo + ',le,' + valor);
        }else{
            return (campo + ',nle,' + valor);
        }
    }
    static maiorIgual(campo:string, valor:number, negar?:boolean){
        if (!negar){
            return (campo + ',ge,' + valor);
        }else{
            return (campo + ',nge,' + valor);
        }
    }
    static maior(campo:string, valor:number, negar?:boolean){
        if (!negar){
            return (campo + ',gt,' + valor);
        }else{
            return (campo + ',ngt,' + valor);
        }
    }
    static entre(campo:string, valorMenor:number, valorMaior:number, negar?:boolean){
        if (!negar){
            return (campo + ',bt,' + valorMenor + ',' + valorMaior);
        }else{
            return (campo + ',nbt,' + valorMenor + ',' + valorMaior);
        }
    }
    static noConjunto(campo:string, valores:any[], negar?:boolean){
        let linha: string;
        linha.concat(valores.splice(0,1).toString());
        valores.forEach(el => {
            linha.concat(',',el.toString());
        });
        if (!negar){
            return (campo + ',in,' + linha);
        }else{
            return (campo + ',nin,' + linha);
        }
    }
    static ehNulo(campo:string, negar?:boolean){
        if (!negar){
            return (campo + ',is');
        }else{
            return (campo + ',nis');
        }
    }
    static filtroAnd(primeiro : boolean = false){
        if (primeiro){
            return 'filter=';
        }else{
            return '&filter=';
        }    
    }
    filtroOr(){
        if (this.primeiroFiltro){
            this.primeiroFiltro = false;
            this.nFiltro = this.nFiltro + 1;
            return ('filter' + this.nFiltro);
        }else{
            return ('&filter' + this.nFiltro);
        }
    }
}