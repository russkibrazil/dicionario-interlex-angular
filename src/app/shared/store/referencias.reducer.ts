import * as ReferenciasActions from './referencias.actions';
import { Referencia } from 'src/app/models/Referencia';

export interface State{
    referencia: Referencia[];
}

export const initialState = [];

export function referenciaReducer(state = initialState, action:ReferenciasActions.ReferenciasActions){
    switch (action.type){
        case (ReferenciasActions.ADD_REFERENCIA):

            return [...state, action.payload]
        case (ReferenciasActions.SET_REFERENCIA): 
            return [...state, action.payload];
        case (ReferenciasActions.UPDATE_REFERENCIA):
            const idx = initialState.indexOf(action.payload.old);
            let referencias = initialState;
            referencias[idx] = action.payload.new;
            return [...state, referencias];
        case (ReferenciasActions.DELETE_REFERENCIA):
            const ix = initialState.indexOf(action.payload);
            let referenciasD = initialState;
            referenciasD.splice(ix,1);
            return [...state,referenciasD];
        default:
            return state;
    }
}