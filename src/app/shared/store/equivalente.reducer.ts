import * as EquivalenteActions from './equivalente.actions';
import { Equivalente } from 'src/app/models/Equivalente';
import { createReducer, on } from '@ngrx/store';

export interface State{
    equivalente: Equivalente[];
}

export const initialState : State= {
    equivalente: []
};

const _equivalenteReducer = createReducer(initialState,
    on(EquivalenteActions.ADD_EQUIVALENTE, 
        (state, {payload}) => (
             {...state, equivalente: [...state.equivalente, payload]}
        )
    ),
    on(EquivalenteActions.SET_EQUIVALENTE, 
        (state, {payload}) => (
            {...state, equivalente: payload}
        )
    ),
    on(EquivalenteActions.DELETE_EQUIVALENTE, 
        (state,{payload}) => {
            let d  = state.equivalente;
            const di = d.findIndex(r => payload === r);
            d.splice(di,1);
            return {...state, equivalente: d}
        }
    ),
    on(EquivalenteActions.UPDATE_EQUIVALENTE, (state, {payload, updateOn}) => {
        let u = state.equivalente;
        const du = u.findIndex(r => updateOn == r);
        u.splice(du,1);
        u.push(payload);
        return {...state, equivalente: u}
    }),
);

export function equivalenteReducer(state, action) {
    return _equivalenteReducer(state,action);
}