import {createAction, props} from '@ngrx/store';
import {Fraseologia} from '../../models/Fraseologia';
import { RespostaErroMySql } from '../mysql/resposta';

export const ADD_FRASEOLOGIA = createAction(
    'ADD_FRASEOLOGIA',
    props<{payload: Fraseologia}>()
);
export const SET_FRASEOLOGIA = createAction(
    'SET_FRASEOLOGIA',
    props<{payload: Fraseologia[]}>()
);
export const UPDATE_FRASEOLOGIA = createAction(
    'UPDATE_FRASEOLOGIA',
    props<{payload: Fraseologia, updateOn: Fraseologia}>()
);
export const DELETE_FRASEOLOGIA = createAction(
    'DELETE_FRASEOLOGIA',
    props<{payload: Fraseologia}>()
);
export const FETCH_FRASEOLOGIA = createAction(
    'FETCH_FRASEOLOGIA',
    props<{filters: string[]}>()
);
export const STORE_FRASEOLOGIA = createAction('STORE_FRASEOLOGIA');

export const FETCH_FRASEOLOGIA_FAIL = createAction(
    'FETCH_FRASEOLOGIA_FAIL',
    props<{payload: RespostaErroMySql<Fraseologia>}>()
)