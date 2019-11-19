import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType } from '@ngrx/effects';
import * as ActionPalavra from './palavras.actions';
import { exhaustMap, map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import { MySqlConnectorService } from '../mysql/mysql.service';
import { RespostaMySql } from '../mysql/resposta';
import { Palavra } from 'src/app/models/Palavra';

@Injectable()
export class PalavrasEffect{
    fetchPalavras$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ActionPalavra.FETCH_PALAVRA),
            exhaustMap(action => 
                this.mysql.readOperationFiltered('palavras', action.filters).pipe(
                    map((data : RespostaMySql<Palavra>) =>
                        ActionPalavra.SET_PALAVRA({payload: data.records})
                    ),
                    catchError(error => of(
                        ActionPalavra.FETCH_PALAVRA_FAIL({
                            payload: error
                        })
                    ))
                )
            )
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

    constructor(private actions$: Actions, private mysql : MySqlConnectorService){}
}