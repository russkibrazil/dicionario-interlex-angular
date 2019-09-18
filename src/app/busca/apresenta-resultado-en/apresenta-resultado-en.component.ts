import { Component, OnInit } from '@angular/core';
import { Equivalente } from 'src/app/models/Equivalente';
import { Fraseologia } from 'src/app/models/Fraseologia';
import { ConjugacaoEn } from 'src/app/models/ConjugacaoEn';
import { ViewerResultadosEn } from 'src/app/models/ViewerResultadoEn';

@Component({
    selector: 'app-apresenta-resultado-en',
    templateUrl: 'apresenta-resultado-en.component.html'
})

export class ApresentaResultadoEnComponent implements OnInit {
    palavraBuscada = new ViewerResultadosEn;
    constructor() { }

    ngOnInit() {
        const conjEn = new ConjugacaoEn(1);
        conjEn.adicionarPresente('construção presente', '');
        conjEn.constrGoingTo = 'going to';
        conjEn.constrPasCon = 'pascon';
        conjEn.constrPasPer = 'pasper';
        conjEn.constrPassado = 'passado';
        conjEn.constrPresCon = 'prescon';
        conjEn.constrPresPer = 'presper';
        conjEn.constrPresente = 'presnete';
        conjEn.constrWill = 'will';

        this.palavraBuscada.idPalavra = 1;
        this.palavraBuscada.lema = 'sdasdasd';
        this.palavraBuscada.cGram = 'classe gramatical';
        this.palavraBuscada.listaEq = [
            new Equivalente(1, 2, 'Exemplo de uso de equivalente', 'equivalent use test string', 231, 'keyword',1),
            new Equivalente(2,3, 'Outro exemplo', 'outro exemplo original traduzido', 2, 'outra palabra guia', 4)];
        this.palavraBuscada.listaConjEq = [conjEn, conjEn];
        this.palavraBuscada.frasesRelacionadas = [
            new Fraseologia(1,'Frase original de fraseologia', 'frase quivalente de fraseologia', 'exemplo de uso original', 'exemplo de uso equivlanete', 'notas culturais de fraseologia', 'notas gramaticais de fraseologia', 'categoria de fraseologia'),
            new Fraseologia(2, 'Outra frase original', 'outra frase equivalente', 'exemplo de como usar originalmente esta frase', 'exemplo de como usar originalmen te esta frase traduzida', 'notas culturais', 'notas gramaticais', 'c')
        ];
    }
}