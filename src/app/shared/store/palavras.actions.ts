import {createAction, props} from '@ngrx/store';
import {Palavra} from '../../models/Palavra';
import { RespostaErroMySql } from '../mysql/resposta';

export const ADD_PALAVRA = createAction(
    'ADD_PALAVRA',
    props<{payload: Palavra}>()
);
export const SET_PALAVRA = createAction(
    'SET_PALAVRA',
    props<{payload: Palavra[]}>()
);
export const UPDATE_PALAVRA = createAction(
    'UPDATE_PALAVRA',
    props<{payload: Palavra, updateOn: Palavra}>()
);
export const DELETE_PALAVRA = createAction(
    'DELETE_PALAVRA',
    props<{payload: Palavra}>()
);
export const ATIVAR_PALAVRA = createAction(
    'ATIVAR_PALAVRA',
    props<{payload: Palavra}>()
);
export const FETCH_PALAVRA = createAction(
    'FETCH_PALAVRA',
    props<{filters: string[]}>()
);
export const STORE_PALAVRA = createAction('STORE_PALAVRA');
export const FETCH_PALAVRA_FAIL = createAction(
    'FETCH_PALAVRA_FAIL',
    props<{payload: RespostaErroMySql<Palavra>}>()
)