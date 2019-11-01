import * as EquivalenteActions from './equivalente.actions';
import { Equivalente } from 'src/app/models/Equivalente';

export interface State{
    equivalente: Equivalente[];
}

export const initialState = [];

export function palavraReducer(state = initialState, action:EquivalenteActions.EquivalenteActions){
    switch (action.type){
        case (EquivalenteActions.ADD_EQUIVALENTE):

            return [...state, action.payload]
        case (EquivalenteActions.SET_EQUIVALENTE): 
            return [...state, action.payload];
        case (EquivalenteActions.UPDATE_EQUIVALENTE):
            const idx = initialState.indexOf(action.payload.old);
            let equivalente = initialState;
            equivalente[idx] = action.payload.new;
            return [...state, equivalente];
        case (EquivalenteActions.DELETE_EQUIVALENTE):
            const ix = initialState.indexOf(action.payload);
            let equivalenteD = initialState;
            equivalenteD.splice(ix,1);
            return [...state,equivalenteD];
        default:
            return state;
    }
}