import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaComponent } from './busca.component';
import { BuscaCaixaComponent } from './buscaCaixa/buscaCaixa.component';
import { BuscaResultadosComponent } from './busca-resultados/busca-resultados.component';
import { BuscaRoutesModule } from './busca-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, BuscaRoutesModule, FormsModule],
    exports: [],
    declarations: [BuscaComponent, BuscaCaixaComponent, BuscaResultadosComponent],
    providers: [],
})
export class BuscaModule { }
