import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaComponent } from './busca.component';
import { BuscaResultadosComponent } from './busca-resultados/busca-resultados.component';

const routes: Routes = [
    {path: '', component: BuscaComponent, children:[
        {path:'', component: BuscaResultadosComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class BuscaRoutesModule { }