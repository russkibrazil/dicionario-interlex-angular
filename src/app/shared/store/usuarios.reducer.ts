import * as UsuariosActions from './usuarios.actions';
import { Usuario } from 'src/app/models/Usuario';
import { createReducer, on } from '@ngrx/store';

export interface State{
    usuario: Usuario[];
}

export const initialState : State = {
    usuario: []
};

const _usuarioReducer = createReducer( initialState,
    on(UsuariosActions.ADD_USUARIO,
        (state, {payload}) => (
            {...state, usuario: [...state.usuario, payload]}
        )
    ),
    on(UsuariosActions.SET_USUARIO,
        (state, {payload}) => (
            {...state, equivalente: payload}
        )
    ),
    on(UsuariosActions.UPDATE_USUARIO,
        (state, {payload, updateOn}) => {
            let u = state.usuario;
            const du = u.findIndex(r => updateOn === r);
            u.splice(du,1);
            u.push(payload);
            return {...state, usuario: u}
        }
    ),
    on(UsuariosActions.DELETE_USUARIO,
        (state, {payload}) => {
            let d = state.usuario;
            const di = d.findIndex(r => payload === r);
            d.splice(di,1);
            return {...state, usuario: d}
        })
);

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}