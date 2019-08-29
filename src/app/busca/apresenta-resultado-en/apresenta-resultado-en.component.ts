import { Component, OnInit } from '@angular/core';
import { Palavra } from 'src/app/models/Palavra';
import { Equivalente } from 'src/app/models/Equivalente';
import { Fraseologia } from 'src/app/models/Fraseologia';
import { ConjugacaoEn } from 'src/app/models/ConjugacaoEn';

@Component({
    selector: 'app-apresenta-resultado-en',
    templateUrl: 'apresenta-resultado-en.component.html'
})

export class ApresentaResultadoEnComponent implements OnInit {
    palavra : Palavra;
    equivalentes : Equivalente[];
    conjugaEn : ConjugacaoEn[];
    frases : Fraseologia[];
    constructor() { }

    ngOnInit() { }
}