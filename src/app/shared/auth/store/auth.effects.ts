import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, catchError,withLatestFrom,exhaustMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { MySqlConnectorService } from '../../mysql/mysql.service';
import * as fromApp from '../../store/app.reducer';
import * as AuthAction from './auth.actions';
import { GeradorFiltro } from '../../mysql/geradorFiltro';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthEffect{
    tryingSignin$ = createEffect(() => 
        this.actions$.pipe(
           ofType(AuthAction.TRY_SIGNIN),
                exhaustMap(action => 
                this.mysql.readOperationFiltered('usr',['filter=' + GeradorFiltro.igual('usr', action.username), GeradorFiltro.filtroAnd() + GeradorFiltro.igual('pass',action.password)]).pipe(
                    map(usuario => {
                        this.authService.login('EDT');
                        this.router.navigate(['m/edit']);
                        return AuthAction.SIGNIN
                    })
                )
            )
        )
    );

    constructor(private actions$: Actions, private mysql : MySqlConnectorService,private store: Store<fromApp.AppState>, private router: Router, private authService: AuthService){}
}