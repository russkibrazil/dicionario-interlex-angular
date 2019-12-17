import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalavrasComponent } from './palavras/palavras.component';
import { PalavraGuiaComponent } from './palavra-guia/palavra-guia.component';
import { FraseologiaComponent } from './fraseologia/fraseologia.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { EquivalenteComponent } from './equivalente/equivalente.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AuthGuard } from '../shared/auth/auth-guard.service';
import { ConjugacaoPt } from '../models/ConjugacaoPt';
import { BuscaGenericaComponent } from './busca-generica/busca-generica.component';

const routes: Routes = [
    //{path: 'm', canActivateChild:[AuthGuard], children:[
    {path: 'm', children:[
        {path: 'palavras', component:PalavrasComponent},
        {path: 'palavras/:id', children:[
            {path: '', component: PalavrasComponent},
            {path: 'equivalencias', component: EquivalenteComponent},
            {path: 'frase', component: FraseologiaComponent},
            {path: 'conjugacoes', component: ConjugacaoPt}
        ]},
        {path: 'pguia', component: PalavraGuiaComponent},
        {path: 'referencias', children:[
            {path: '', component: ReferenciasComponent, pathMatch: 'full'},
            {path: ':cod', component: ReferenciasComponent}
        ]},
        {path: 'usuarios', children:[
            {path:'',  component: UsuariosComponent, pathMatch: 'full'},
            {path: ':usr', component: UsuariosComponent}
        ]},
        {path: 'buscar', component: BuscaGenericaComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class ManutenRoutingModule { }