import * as ReferenciasActions from './referencias.actions';
import { Referencia } from 'src/app/models/Referencia';
import { createReducer, on } from '@ngrx/store';

export interface State{
    referencia: Referencia[];
}

export const initialState : State = {
    referencia: []
};

const _referenciaReducer = createReducer(initialState,
    on(ReferenciasActions.ADD_REFERENCIA,
        (state, {payload}) => (
            {...state, referencia: [...state.referencia, payload]}
        )
    ),
    on(ReferenciasActions.SET_REFERENCIA,
        (state, {payload}) => (
            {...state, referencia: payload}
        )
    ),
    on(ReferenciasActions.UPDATE_REFERENCIA,
        (state, {payload, updateOn}) => {
            let u = state.referencia;
            const du = u.findIndex(r => updateOn === r);
            u.splice(du, 1);
            u.push(payload);
            return {...state, referencia: u}
        }),
    on(ReferenciasActions.DELETE_REFERENCIA,
        (state, {payload}) => {
            let d = state.referencia;
            const di = d.findIndex(r => payload === r);
            d.splice(di, 1);
            return {...state, referencia: d}
        })
);

export function referenciaReducer(state, action) {
    return _referenciaReducer(state, action);
}