import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import { MySqlConnectorService } from '../../mysql/mysql.service';
import * as AuthAction from './auth.actions';
import { GeradorFiltro } from '../../mysql/geradorFiltro';
import { AuthService } from '../auth.service';
import { RespostaMySql, RespostaErroMySql, ClasseRespostaMySql } from '../../mysql/resposta';
import { Usuario } from 'src/app/models/Usuario';

@Injectable()
export class AuthEffect{
    tryingSignin$ = createEffect(() => 
        this.actions$.pipe(
           ofType(AuthAction.TRY_SIGNIN),
            exhaustMap(action => 
                this.mysql.readOperationFiltered('usr',['filter=' + GeradorFiltro.igual('usr', action.username), GeradorFiltro.filtroAnd() + GeradorFiltro.igual('pass',action.password)]).pipe(
                    map((usuario : RespostaMySql<Usuario>) => {
                        const u = usuario.records[0];
                        this.authService.login(u.nivel_permissao);
                        this.router.navigate(['m/edit']);
                        console.log('clear');
                        return AuthAction.SIGNIN
                    }), 
                    catchError(error => 
                        of(AuthAction.SIGNIN_FAIL({payload: error}))
                    )
                )
            )
        )
    );

    constructor(private actions$: Actions, private mysql : MySqlConnectorService, private router: Router, private authService: AuthService){}
}