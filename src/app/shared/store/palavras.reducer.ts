import * as PalavrasActions from './palavras.actions';
import { Palavra } from 'src/app/models/Palavra';

export interface State{
    palavra: Palavra[];
}

export const initialState = [];

export function palavraReducer(state = initialState, action:PalavrasActions.PalavrasActions){
    switch (action.type){
        case (PalavrasActions.ADD_PALAVRA):

            return [...state, action.payload]
        case (PalavrasActions.SET_PALAVRA): 
            return [...state, action.payload];
        case (PalavrasActions.UPDATE_PALAVRA):
            const idx = initialState.indexOf(action.payload.old);
            let palavras = initialState;
            palavras[idx] = action.payload.new;
            return [...state, palavras];
        case (PalavrasActions.DELETE_PALAVRA):
            const ix = initialState.indexOf(action.payload);
            let palavrasD = initialState;
            palavrasD.splice(ix,1);
            return [...state,palavrasD];
        default:
            return state;
    }
}