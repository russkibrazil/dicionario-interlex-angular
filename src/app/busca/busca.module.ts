import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BuscaComponent } from './busca.component';
import { BuscaCaixaComponent } from './buscaCaixa/buscaCaixa.component';
import { BuscaResultadosComponent } from './busca-resultados/busca-resultados.component';
import { BuscaRoutesModule } from './busca-routing.module';
import { ApresentaResultadoEnComponent } from './apresenta-resultado-en/apresenta-resultado-en.component';
import { ApresentaResultadoEsComponent } from './apresenta-resultado-es/apresenta-resultado-es.component';
import { CompartilhadoModule } from '../shared/shared.module';

@NgModule({
    imports: [ BuscaRoutesModule, FormsModule, CompartilhadoModule],
    exports: [],
    declarations: [
        BuscaComponent,
        BuscaCaixaComponent,
        BuscaResultadosComponent,
        ApresentaResultadoEnComponent,
        ApresentaResultadoEsComponent
    ],
    providers: [],
})
export class BuscaModule { }
