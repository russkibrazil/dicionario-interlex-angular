import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { RespostaErroMySql } from '../../mysql/resposta';
import { Usuario } from 'src/app/models/Usuario';

export interface State{
    auth:boolean;
    level:string;
}

const initialState : State= {
    auth: false,
    level: 'USR'    
}

const _authReducer = createReducer(initialState,
    on(AuthActions.SIGNIN, (state, {level}) => ({...state,
            auth: true, 
            level: level
        })
        ),
    on(AuthActions.LOGOUT, state => ({...state,
        auth: false,
        level: 'USR'
        })
    ),
    on(AuthActions.SIGNIN_FAIL, (state, {payload}) => {
        try {
            const errchk : RespostaErroMySql<Usuario> = payload;
            if (errchk.error.records.length > 0){
                const ex = errchk.error.records[0];
                return AuthActions.SIGNIN({level: ex.nivel_permissao});
            }else{
                return state;
            }
        } catch (error) {
            console.error(error);
            return state;
        }
    })
);

export function authReducer(state, action){
    return _authReducer(state, action);
}