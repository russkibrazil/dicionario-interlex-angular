import * as UsuariosActions from './usuarios.actions';
import { Usuario } from 'src/app/models/Usuario';
import * as fromApp from './app.reducer';

export interface FeatureState extends fromApp.AppState{
    usuario: State
}

export interface State{
    usuario: Usuario[];
}

export const initialState = [];

export function usuarioReducer(state = initialState, action:UsuariosActions.UsuarioActions){
    switch (action.type){
        case (UsuariosActions.ADD_USUARIO):

            return [...state, action.payload]
        case (UsuariosActions.SET_USUARIO): 
            return [...state, action.payload];
        case (UsuariosActions.UPDATE_USUARIO):
            const idx = initialState.indexOf(action.payload.old);
            let usuarios = initialState;
            usuarios[idx] = action.payload.new;
            return [...state, usuarios];
        case (UsuariosActions.DELETE_USUARIO):
            const ix = initialState.indexOf(action.payload);
            let usuariosD = initialState;
            usuariosD.splice(ix,1);
            return [...state,usuariosD];
        default:
            return state;
    }
}