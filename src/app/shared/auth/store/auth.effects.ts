import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { MySqlConnectorService } from '../../mysql/mysql.service';
import * as AuthAction from './auth.actions';
import { GeradorFiltro } from '../../mysql/geradorFiltro';
import { AuthService } from '../auth.service';
import { RespostaMySql } from '../../mysql/resposta';
import { Usuario } from 'src/app/models/Usuario';

@Injectable()
export class AuthEffect{
    tryingSignin$ = createEffect(() => 
        this.actions$.pipe(
           ofType(AuthAction.TRY_SIGNIN),
                exhaustMap(action => 
                this.mysql.readOperationFiltered('usr',['filter=' + GeradorFiltro.igual('usr', action.username), GeradorFiltro.filtroAnd() + GeradorFiltro.igual('pass',action.password)]).pipe(
                    map(usuario => {
                        const r : RespostaMySql<Usuario> = usuario;
                        const u = r.records[0];
                        this.authService.login(u.nivel_permissao);
                        this.router.navigate(['m/edit']);
                        return AuthAction.SIGNIN
                    }), catchError(()=> EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private mysql : MySqlConnectorService, private router: Router, private authService: AuthService){}
}