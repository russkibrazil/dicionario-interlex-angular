import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaComponent } from './busca.component';
import { ApresentaResultadoEsComponent } from './apresenta-resultado-es/apresenta-resultado-es.component';

const routes: Routes = [
    {path: '', component: BuscaComponent},
    {path: 'es/:id/:lema', component: ApresentaResultadoEsComponent},
    {path: 'en/:id/:lema', component: ApresentaResultadoEsComponent},
    {path: '**', component: BuscaComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class BuscaRoutesModule { }