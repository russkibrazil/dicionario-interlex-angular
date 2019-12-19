import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FraseologiaComponent } from './fraseologia/fraseologia.component';
import { PalavraGuiaComponent } from './palavra-guia/palavra-guia.component';
import { PalavrasComponent } from './palavras/palavras.component';
import { CompartilhadoModule } from '../shared/shared.module';
import { EquivalenteComponent } from './equivalente/equivalente.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ManutenRoutingModule } from './manuten-routing.module';
import { BuscaGenericaComponent } from './busca-generica/busca-generica.component';
import { ConjPtComponent } from './conj-pt/conj-pt.component';
import { ConjEnComponent } from './conj-en/conj-en.component';

//import { ManutenComponent } from './manuten.component';

@NgModule({
    imports: [ReactiveFormsModule, CompartilhadoModule, ManutenRoutingModule],
    exports: [],
    declarations: [
        FraseologiaComponent,
        PalavraGuiaComponent,
        PalavrasComponent,
        EquivalenteComponent,
        ReferenciasComponent,
        UsuariosComponent,
        BuscaGenericaComponent,
        ConjPtComponent,
        ConjEnComponent
    ],
    providers: [],
})
export class ManutenModule { }
