import { Component, OnInit } from '@angular/core';
import { ViewerResultadosEn } from 'src/app/models/ViewerResultadoEn';
import { PalavraService } from 'src/app/services/palavra.service';
import { ActivatedRoute } from '@angular/router';
import { Palavra } from 'src/app/models/Palavra';
import { MostraPalavraEquivalenciasView } from 'src/app/models/MostraPalavraEquivalenciasView';
import { ConjugacaoEnService } from 'src/app/services/conjugacaoEn.service';
import { FraseologiaService } from 'src/app/services/fraseologia.service';
import { GeradorFiltro } from 'src/app/shared/mysql/geradorFiltro';
import { EquivalenteService } from 'src/app/services/equivalente.service';
import { Observable } from 'rxjs';
import { Fraseologia } from 'src/app/models/Fraseologia';
import { MostraEquivalenciasConjugacaoView } from 'src/app/models/MostraEquivalenciasConjugacaoView';

@Component({
    selector: 'app-apresenta-resultado-en',
    templateUrl: 'apresenta-resultado-en.component.html'
})

export class ApresentaResultadoEnComponent implements OnInit {
    resultadosEn = new ViewerResultadosEn;
    resultadosPE : Observable<MostraPalavraEquivalenciasView[]>;
    resultadosF : Observable<Fraseologia[]>;
    resultadosCI : Observable<MostraEquivalenciasConjugacaoView[]>;
    pA : Palavra;

    constructor(private pSvc : PalavraService, 
        private cISvc : ConjugacaoEnService,
        private fSvc : FraseologiaService,
        private eSvc : EquivalenteService,
        private actvRt : ActivatedRoute) { }

    ngOnInit() {
        const idP = this.actvRt.snapshot.params['id'];
        const arr = this.pSvc.get();
        this.pA = arr.find(
            p => p.Id === (+idP)
        );

        this.eSvc.fetchPEquivalentesView(this.pA.Id);
        this.resultadosPE = this.eSvc.sPEquivalentes.asObservable();

        this.cISvc.fetchEqConjugacaoEnView(this.pA.Id);
        this.resultadosCI = this.cISvc.sEqConjugacaoEn.asObservable();
        
        this.fSvc.fetch([GeradorFiltro.filtroAnd(true) + GeradorFiltro.igual('id', this.pA.Id)]);
        this.resultadosF = this.fSvc.sFraseologia.asObservable();
    }
}