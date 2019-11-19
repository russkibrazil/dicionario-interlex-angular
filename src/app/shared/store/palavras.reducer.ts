import * as PalavrasActions from './palavras.actions';
import { Palavra } from 'src/app/models/Palavra';
import { createReducer, on } from '@ngrx/store';

export interface State{
    palavra: Palavra[];
    palavraAtiva: Palavra;
}

export const initialState = {
    palavra: [],
    palavraAtiva: null
};

const _palavraReducer = createReducer(initialState,
    on(PalavrasActions.ADD_PALAVRA,
        (state, {payload}) => (
            {...state, palavra: [...state.palavra, payload]}
        )
    ),
    on(PalavrasActions.SET_PALAVRA,
        (state, {payload}) => (
            {...state, palavra: payload}
        )
    ),
    on(PalavrasActions.UPDATE_PALAVRA,
        (state, {payload, updateOn}) => {
            let u = state.palavra;
            const du = u.findIndex(r => updateOn === r);
            u.splice(du, 1);
            u.push(payload);
            return {...state, palavra: u}
        }
    ),
    on(PalavrasActions.DELETE_PALAVRA,
        (state, {payload})=> {
            let d = state.palavra;
            const di = d.findIndex(r => payload === r);
            d.splice(di,1);
            return {...state, palavra: d}
        }),
    on(PalavrasActions.ATIVAR_PALAVRA,
        (state, {payload}) => ({...state, palavraAtiva: payload})
    )
);

export function palavraReducer(state,action) {
    return _palavraReducer(state, action);    
}