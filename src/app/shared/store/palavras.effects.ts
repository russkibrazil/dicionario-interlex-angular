import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType } from '@ngrx/effects';
import * as ActionPalavra from './palavras.actions';
import { switchMap, map, catchError,withLatestFrom } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { MySqlConnectorService } from '../mysql/mysql.service';
import { Store } from '@ngrx/store';
import * as fromApp from './app.reducer';
import { GeradorFiltro } from '../mysql/geradorFiltro';

@Injectable()
export class PalavrasEffect{
    fetchPalavras$ = createEffect(() => this.actions$.pipe(
        ofType(ActionPalavra.FETCH_PALAVRA),
        switchMap((action: ActionPalavra.FetchPalavra) => {
            return this.mysql.readOperationFiltered('palavras',[GeradorFiltro.stringContem('lema', 'ar')])
        }),
        map((palavras) =>{
            return {type: ActionPalavra.SET_PALAVRA,
            payload: palavras}
        }),
        catchError(()=>EMPTY)
        )
    );
   

   /* storePalavras$ = createEffect(() => this.actions$.pipe(
        ofType(ActionPalavra.STORE_PALAVRA),
        withLatestFrom(this.store.select('palavra')),
        switchMap(([action,state]) => {
            return this.mysql.updateOperation()
        }),
        catchError(() => EMPTY)
        )
    );*/

    constructor(private actions$: Actions, private mysql : MySqlConnectorService,private store: Store<fromApp.AppState>){}
}