import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaComponent } from './busca.component';
import { ApresentaResultadoEsComponent } from './apresenta-resultado-es/apresenta-resultado-es.component';
import { ApresentaResultadoEnComponent } from './apresenta-resultado-en/apresenta-resultado-en.component';

const routes: Routes = [
    {path: 'b', component: BuscaComponent},
    {path: 'pt/:id/:lema', component: ApresentaResultadoEsComponent},
    {path: 'es/:id/:lema', component: ApresentaResultadoEsComponent},
    {path: 'en/:id/:lema', component: ApresentaResultadoEnComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class BuscaRoutesModule { }