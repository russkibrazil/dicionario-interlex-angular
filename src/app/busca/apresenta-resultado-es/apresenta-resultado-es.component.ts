import { Component, OnInit } from '@angular/core';
import { ViewerResultadoEs } from 'src/app/models/ViewerResultadoEs';
import { PalavraService } from 'src/app/services/palavra.service';
import { ActivatedRoute } from '@angular/router';
import { Palavra  } from 'src/app/models/Palavra';
import { MostraPalavraEquivalenciasView } from 'src/app/models/MostraPalavraEquivalenciasView';
import { Observable } from 'rxjs';
import { EquivalenteService } from 'src/app/services/equivalente.service';

@Component({
    selector: 'app-apresenta-resultado-es',
    templateUrl: 'apresenta-resultado-es.component.html'
})

export class ApresentaResultadoEsComponent implements OnInit {
    resultadosEs = new ViewerResultadoEs();
    observaView : Observable<MostraPalavraEquivalenciasView[]>;
    pA;
    constructor(
        private pSvc : PalavraService,
        private eSvc : EquivalenteService,
        private actvRt : ActivatedRoute
        ) {
         }

    ngOnInit() {
        //const lng = this.actvRt.snapshot.params['lng'];
        const idP = this.actvRt.snapshot.params['id'];
        const arr = this.pSvc.get();
        this.pA  = arr.find(
            p => p.Id === (+idP)// && p.Idioma == 'ES'
        );

        this.eSvc.fetchPEquivalentesView(this.pA.Id); //! https://github.com/mevdschee/php-crud-api/issues/29#issuecomment-189529621
        this.observaView = this.eSvc.sPEquivalentes.asObservable();
        
        this.resultadosEs.sublema = 'meu sublema';
    }
}