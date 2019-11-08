import * as AuthActions from './auth.actions';

export interface State{
    auth:boolean;
    level:string;
}

const initialState : State= {
    auth: false,
    level: 'USR'    
}

export function authReducer(state = initialState, action:AuthActions.AuthActions){
    switch (action.type){
        case (AuthActions.SIGNIN):
        case (AuthActions.SIGNUP):
            return {...state, auth: true, level: action.payload}
        case (AuthActions.LOGOUT):
            return {...state, auth: false, level: 'USR'}
        default:
            return state;
    }
}