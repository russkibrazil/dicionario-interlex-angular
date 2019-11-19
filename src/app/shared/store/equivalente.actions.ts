import {createAction, props} from '@ngrx/store';
import {Equivalente} from '../../models/Equivalente';
import {RespostaErroMySql} from '../mysql/resposta';

export const ADD_EQUIVALENTE = createAction(
    'ADD_EQUIVALENTE',
    props<{payload: Equivalente}>());
export const SET_EQUIVALENTE = createAction(
    'SET_EQUIVALENTE',
    props<{payload: Equivalente[]}>());
export const UPDATE_EQUIVALENTE = createAction(
    'UPDATE_EQUIVALENTE',
    props<{payload: Equivalente, updateOn: Equivalente}>());
export const DELETE_EQUIVALENTE = createAction(
    'DELETE_EQUIVALENTE',
    props<{payload: Equivalente}>()
);
export const FETCH_EQUIVALENTE = createAction(
    'FETCH_EQUIVALENTE',
    props<{filters: string[];}>()
);
export const STORE_EQUIVALENTE = createAction('STORE_EQUIVALENTE');

export const FETCH_EQUIVALENTE_FAIL = createAction(
    'FETCH_EQUIVALENTE_FAIL',
    props<{payload: RespostaErroMySql<Equivalente>}>()
)