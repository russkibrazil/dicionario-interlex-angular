import { Injectable } from "@angular/core";
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { MySqlConnectorService } from '../mysql/mysql.service';
import * as FraseologiaActions from '../store/fraseologia.actions';
import { RespostaMySql } from '../mysql/resposta';
import { Fraseologia } from 'src/app/models/Fraseologia';

@Injectable()
export class FraseologiaEffect{
    fetchFraseologia$ = createEffect(() => 
        this.actions$.pipe(
            ofType(FraseologiaActions.FETCH_FRASEOLOGIA),
            exhaustMap(action =>
                this.mysql.readOperationFiltered('fraseologia',action.filters).pipe(
                    map((data: RespostaMySql<Fraseologia>) => 
                        FraseologiaActions.SET_FRASEOLOGIA({ payload: data.records })
                    ),
                    catchError(error => of(FraseologiaActions.FETCH_FRASEOLOGIA_FAIL(
                        { payload: error }
                    )))
                )
            )
        )
    );

    constructor(private actions$:Actions, private mysql: MySqlConnectorService){}
}