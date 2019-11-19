import { Injectable } from "@angular/core";
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { MySqlConnectorService } from '../mysql/mysql.service';
import * as ReferenciasActions from '../store/referencias.actions'
import { RespostaMySql } from '../mysql/resposta';
import { Referencia } from 'src/app/models/Referencia';

@Injectable()
export class ReferenciasEffect{
    fetchReferencias$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ReferenciasActions.FETCH_REFERENCIA),
            exhaustMap(action =>
                this.mysql.readOperationFiltered('referencias', action.filters).pipe(
                    map((data : RespostaMySql<Referencia>) =>
                        ReferenciasActions.SET_REFERENCIA({ payload: data.records })
                    ),
                    catchError(error => of(
                        ReferenciasActions.FETCH_REFERENCIA_FAIL(
                            { payload: error }
                            )
                        )
                    )
                )
            )
        )
    );
    constructor(private actions$:Actions, private mysql:MySqlConnectorService){}
}