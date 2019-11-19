import {createAction, props} from '@ngrx/store';
import {Referencia} from '../../models/Referencia';
import {RespostaErroMySql} from '../mysql/resposta';

export const ADD_REFERENCIA = createAction(
    'ADD_REFERENCIA',
    props<{payload: Referencia}>()
);
export const SET_REFERENCIA = createAction(
    'SET_REFERENCIA',
    props<{payload: Referencia[]}>()
);
export const UPDATE_REFERENCIA = createAction(
    'UPDATE_REFERENCIA',
    props<{payload: Referencia, updateOn: Referencia}>()
);
export const DELETE_REFERENCIA = createAction(
    'DELETE_REFERENCIA',
    props<{payload: Referencia}>()
);
export const FETCH_REFERENCIA = createAction(
    'FETCH_REFERENCIA',
    props<{filters: string[]}>()
);
export const STORE_REFERENCIA = createAction('STORE_REFERENCIA');
export const FETCH_REFERENCIA_FAIL = createAction(
    'FETCH_REFERENCIA_FAIL',
    props<{payload: RespostaErroMySql<Referencia>}>()
)