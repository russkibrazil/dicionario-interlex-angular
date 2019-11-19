import {createAction, props} from '@ngrx/store';
import {Usuario} from '../../models/Usuario';
import {RespostaErroMySql} from '../mysql/resposta';

export const ADD_USUARIO = createAction(
    'ADD_USUARIO',
    props<{payload: Usuario}>()
);
export const SET_USUARIO = createAction(
    'SET_USUARIO',
    props<{payload: Usuario[]}>()
);
export const UPDATE_USUARIO = createAction(
    'UPDATE_USUARIO',
    props<{payload: Usuario, updateOn: Usuario}>()
);
export const DELETE_USUARIO = createAction(
    'DELETE_USUARIO',
    props<{payload: Usuario}>()
);
export const FETCH_USUARIO = createAction(
    'FETCH_USUARIO',
    props<{filters: string[]}>()
);
export const STORE_USUARIO = createAction('STORE_USUARIO');
export const FETCH_USUARIO_FAIL = createAction(
    'FETCH_USUARIO_FAIL',
    props<{payload: RespostaErroMySql<Usuario>}>()
);