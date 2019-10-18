import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalavrasComponent } from './palavras/palavras.component';
import { PalavraGuiaComponent } from './palavra-guia/palavra-guia.component';
import { FraseologiaComponent } from './fraseologia/fraseologia.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { EquivalenteComponent } from './equivalente/equivalente.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AuthGuard } from '../shared/auth/auth-guard.service';

const routes: Routes = [
    {path: 'm', canActivateChild:[AuthGuard], children:[
        {path: 'edit', component: PalavrasComponent , children:[
            {path: 'equivalencias', component: EquivalenteComponent},
            {path: 'frase', component: FraseologiaComponent}
        ]},
        {path: 'pguia', component: PalavraGuiaComponent},
        {path: 'referencias', component: ReferenciasComponent},
        {path: 'usuarios', component: UsuariosComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class ManutenRoutingModule { }