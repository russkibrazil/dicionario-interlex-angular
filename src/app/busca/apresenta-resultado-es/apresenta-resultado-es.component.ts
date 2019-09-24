import { Component, OnInit } from '@angular/core';
import { ViewerResultadoEs } from 'src/app/models/ViewerResultadoEs';
import { Equivalente } from 'src/app/models/Equivalente';

@Component({
    selector: 'app-apresenta-resultado-es',
    templateUrl: 'apresenta-resultado-es.component.html'
})

export class ApresentaResultadoEsComponent implements OnInit {
    resultadosEs = new ViewerResultadoEs;
    constructor() { }

    ngOnInit() { 
        this.resultadosEs.idPalavra = 1;
        this.resultadosEs.lema = 'sdasdasd';
        this.resultadosEs.cGram = 'classe gramatical';
        this.resultadosEs.listaEq = [
            new Equivalente(1, 2, 'Exemplo de uso de equivalente', 'equivalent use test string', 231, 'keyword',1),
            new Equivalente(2,3, 'Outro exemplo', 'outro exemplo original traduzido', 2, 'outra palabra guia', 4)];
        this.resultadosEs.sublema = 'meu sublema';
        this.resultadosEs.genero = 'masculino';
        this.resultadosEs.definicao = 'Este é um texto teste para escrever a definição do lema em questão. Não tenho um texto significativo para colocar aqui, portanto, vou somente encher linguiça até que eu me canse de escrever e considere este parágrafo inúti como acabado e suficiente para meu teste.';
    }
}