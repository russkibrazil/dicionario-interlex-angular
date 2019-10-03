import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalavrasComponent } from './palavras/palavras.component';
import { PalavraGuiaComponent } from './palavra-guia/palavra-guia.component';
import { FraseologiaComponent } from './fraseologia/fraseologia.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { EquivalenteComponent } from './equivalente/equivalente.component';

const routes: Routes = [
    {path: 'edit', component: PalavrasComponent},
    {path:':lng/:id/frase', component: FraseologiaComponent},
    {path: 'pguia', component: PalavraGuiaComponent},
    {path: ':lng/referencias', component: ReferenciasComponent},
    {path: ':lng/:id/equivalencias', component: EquivalenteComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class ManutenRoutingModule { }