import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { RespostaErroMySql } from '../../mysql/resposta';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

export interface State{
    auth:boolean;
    level:string;
}
let router : Router; //não definido

const initialState : State= {
    auth: false,
    level: 'USR'    
}
 // o problema é coletado, contudo, não é repassado para o service nem a navegação é realizada para as páginas administrativas
 // possivel solução: criar um observable/subscription no serviço auth que permaneça vigiando esse pedaço da store
const _authReducer = createReducer(initialState,
    on(AuthActions.SIGNIN, (state, {level}) => {
        router.navigate(['m/edit']);
         return {...state,
            auth: true, 
            level: level
        }}
        ),
    on(AuthActions.LOGOUT, state => ({...state,
        auth: false,
        level: 'USR'
        })
    ),
    on(AuthActions.SIGNIN_FAIL, (state, {payload}) => {
        try {
            const errchk : RespostaErroMySql<Usuario> = payload;
            console.log('theres a error in the login; Solving...');
            if (errchk !== undefined){
                if (errchk.error.records.length == 1){
                    const ex = errchk.error.records[0].nivel_permissao;
                    router.navigate(['m/edit']);
                    return {...state, auth: true, level: ex};
                }
                console.error('Houve erro no login.');
                return state;
            }
            console.log('Não pude resolver');
        } catch (error) {
            console.error(error);
            return state;
        }
        return state;
    })
);

export function authReducer(state, action){
    return _authReducer(state, action);
}