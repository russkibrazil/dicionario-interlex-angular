import { Equivalente } from './Equivalente';
import { ConjugacaoEn } from './ConjugacaoEn';
import { Fraseologia } from './Fraseologia';

export class ViewerResultadosEn{
    idPalavra : number;
    lema: string;
    cGram : string;
    listaEq : Equivalente[];
    listaConjEq : ConjugacaoEn[];
    frasesRelacionadas : Fraseologia[];

    constructor(){}
}
