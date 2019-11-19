import { Injectable } from "@angular/core";
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { MySqlConnectorService } from '../mysql/mysql.service';
import * as UsuariosActions from '../store/usuarios.actions';
import { RespostaMySql } from '../mysql/resposta';
import { Usuario } from 'src/app/models/Usuario';

@Injectable()
export class UsuariosEffect{
    usuariosFetch$ = createEffect(() => 
        this.actions$.pipe(
            ofType(UsuariosActions.FETCH_USUARIO),
            exhaustMap(action =>
                this.mysql.readOperationFiltered('usr', action.filters).pipe(
                    map((data: RespostaMySql<Usuario>) => 
                        UsuariosActions.SET_USUARIO(
                            {payload: data.records }
                        )
                    ),
                    catchError(error => of(
                        UsuariosActions.FETCH_USUARIO_FAIL(
                            { payload: error }
                        )
                    ))
                )
            )
        )
    );
    constructor(private actions$:Actions, private mysql:MySqlConnectorService){}
}