import * as FraseologiaActions from './fraseologia.actions';
import { Fraseologia } from 'src/app/models/Fraseologia';
import { createReducer, on } from '@ngrx/store';

export interface State{
    fraseologia: Fraseologia[];
}

export const initialState :State = {
    fraseologia: []
};

export const _fraseologiaReducer = createReducer( initialState,
    on(FraseologiaActions.ADD_FRASEOLOGIA,
        (state, {payload}) => (
            {...state, fraseologia: [...state.fraseologia, payload]}
        )
    ),
    on(FraseologiaActions.SET_FRASEOLOGIA,
        (state, {payload}) => (
            {...state, fraseologia: payload}
        )
    ),
    on(FraseologiaActions.UPDATE_FRASEOLOGIA,
        (state, {payload, updateOn}) => {
            let u = state.fraseologia;
            const du = u.findIndex(r => updateOn === r);
            u.splice(du, 1);
            u.push(payload);
            return {...state, fraseologia: u}
        }
    ),
    on(FraseologiaActions.DELETE_FRASEOLOGIA,
        (state, {payload}) => {
            let d = state.fraseologia;
            const di = d.findIndex(r => payload === r);
            d.splice(di, 1);
            return {...state, fraseologia: d}
        }
    )
);

export function fraseologiaReducer(state,action) {
    return _fraseologiaReducer(state, action);
}