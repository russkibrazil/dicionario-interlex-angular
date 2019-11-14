import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, catchError,withLatestFrom } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { MySqlConnectorService } from '../../mysql/mysql.service';
import * as fromApp from '../../store/app.reducer';
import * as AuthAction from './auth.actions';
import { GeradorFiltro } from '../../mysql/geradorFiltro';
import { AuthService } from '../auth.service';

@Injectable()
export class PalavrasEffect{
    tryingSignin$ = createEffect(() => this.actions$.pipe(
        ofType(AuthAction.TRY_SIGNIN),
        switchMap((authData:{username: string, password:string}) => {
            return this.mysql.readOperationFiltered('usuarios',[GeradorFiltro.igual('usr', authData.username), GeradorFiltro.igual('pass',authData.password)])
        }),
        map((usuario) =>{
            this.router.navigate(['m/edit']);
            this.authService.login();
            return {type: AuthAction.SIGNIN,
            payload: usuario.nivel_permissao}
        }),
        catchError(()=>EMPTY)
        )
    );

    constructor(private actions$: Actions, private mysql : MySqlConnectorService,private store: Store<fromApp.AppState>, private router: Router, private authService: AuthService){}
}