import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';

export interface State{
    auth:boolean;
    level:string;
}

const initialState : State= {
    auth: false,
    level: 'USR'    
}

const _authReducer = createReducer(initialState,
    on(AuthActions.SIGNIN, state => ({...state,
            auth: true, 
            level: 'EDT'
        })
        ),
    on(AuthActions.LOGOUT, state => ({...state,
        auth: false,
        level: 'USR'
        })
    )
);

export function authReducer(state, action){
    return _authReducer(state, action);
}