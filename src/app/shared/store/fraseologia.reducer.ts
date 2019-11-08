import * as FraseologiaActions from './fraseologia.actions';
import { Fraseologia } from 'src/app/models/Fraseologia';
import * as fromApp from './app.reducer';

export interface FeatureState extends fromApp.AppState{
   fraseologia : State
}
export interface State{
    fraseologia: Fraseologia[];
}

export const initialState = [];

export function fraseologiaReducer(state = initialState, action:FraseologiaActions.FraseologiaActions){
    switch (action.type){
        case (FraseologiaActions.ADD_FRASEOLOGIA):

            return [...state, action.payload]
        case (FraseologiaActions.SET_FRASEOLOGIA): 
            return [...state, action.payload];
        case (FraseologiaActions.UPDATE_FRASEOLOGIA):
            const idx = initialState.indexOf(action.payload.old);
            let fraseologia = initialState;
            fraseologia[idx] = action.payload.new;
            return [...state, fraseologia];
        case (FraseologiaActions.DELETE_FRASEOLOGIA):
            const ix = initialState.indexOf(action.payload);
            let fraseologiaD = initialState;
            fraseologiaD.splice(ix,1);
            return [...state,fraseologiaD];
        default:
            return state;
    }
}