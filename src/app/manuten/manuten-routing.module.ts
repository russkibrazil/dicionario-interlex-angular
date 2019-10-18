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
    {path: 'edit', component: PalavrasComponent, canActivate:[AuthGuard]},
    {path:':lng/:id/frase', component: FraseologiaComponent, canActivate:[AuthGuard]},
    {path: 'pguia', component: PalavraGuiaComponent, canActivate:[AuthGuard]},
    {path: ':lng/referencias', component: ReferenciasComponent, canActivate:[AuthGuard]},
    {path: ':lng/:id/equivalencias', component: EquivalenteComponent, canActivate:[AuthGuard]},
    {path: 'usuarios', component: UsuariosComponent, canActivate:[AuthGuard]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class ManutenRoutingModule { }