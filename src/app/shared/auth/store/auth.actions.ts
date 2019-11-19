import {createAction, props} from '@ngrx/store';
import { Usuario } from 'src/app/models/Usuario';
import {RespostaErroMySql} from '../../mysql/resposta';

export const TRY_SIGNIN = createAction(
    'TRY_SIGNIN', 
    props<{username: string; password: string;}>()
);
export const TRY_SIGNUP = createAction('TRY_SIGNUP');
export const SIGNIN = createAction(
    'SIGNIN',
    props<{level: string}>()
);
export const SIGNUP = createAction('SIGNUP');
export const LOGOUT = createAction('LOGOUT');
export const SIGNIN_FAIL = createAction(
    'SIGNIN_FAIL',
    props<{payload: RespostaErroMySql<Usuario>}>()
);