import * as PalavrasActions from './palavras.actions';
import { Palavra } from 'src/app/models/Palavra';

export interface State{
    palavra: Palavra[];
    palavraAtiva: Palavra;
}

export const initialState = {
    palavra: null,
    palavraAtiva: null
};

export function palavraReducer(state = initialState, action:PalavrasActions.PalavrasActions){
    switch (action.type){
        case (PalavrasActions.ADD_PALAVRA):

            return {...state, palavra: [...state.palavra,action.payload]};
        case (PalavrasActions.SET_PALAVRA): 
            return {...state, palavra: action.payload};
        case (PalavrasActions.UPDATE_PALAVRA):
            const idx = initialState.palavra.indexOf(action.payload.old);
            let palavras = initialState.palavra;
            palavras[idx] = action.payload.new;
            return {...state, palavra: palavras};
        case (PalavrasActions.DELETE_PALAVRA):
            const ix = initialState.palavra.indexOf(action.payload);
            let palavrasD = initialState.palavra;
            palavrasD.splice(ix,1);
            return {...state, palavra:palavrasD};
        default:
            return state;
    }
}