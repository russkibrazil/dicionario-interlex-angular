import { Injectable } from "@angular/core";
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { MySqlConnectorService } from '../mysql/mysql.service';
import * as EquivalentesActions from '../store/equivalente.actions'
import { RespostaMySql } from '../mysql/resposta';
import { Equivalente } from 'src/app/models/Equivalente';

@Injectable()
export class EquivalenteEffect{
    fetchEquvialente$ = createEffect(() => 
        this.actions$.pipe(
            ofType(EquivalentesActions.FETCH_EQUIVALENTE),
            exhaustMap(action =>
                this.mysql.readOperationFiltered('equivalente', action.filters).pipe(
                    map((data : RespostaMySql<Equivalente>) => 
                        EquivalentesActions.SET_EQUIVALENTE({ payload: data.records })
                    ),
                    catchError(error => of(EquivalentesActions.FETCH_EQUIVALENTE_FAIL(
                        { payload: error })
                    ))
                )
            )
        )
    );

    constructor(private actions$:Actions, private mysql:MySqlConnectorService){}
}