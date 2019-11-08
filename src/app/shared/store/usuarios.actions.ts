import {Action} from '@ngrx/store';
import {Usuario} from '../../models/Usuario';

export const ADD_USUARIO = 'ADD_USUARIO'
export const SET_USUARIO = 'SET_USUARIO';
export const UPDATE_USUARIO = 'UPDATE_USUARIO';
export const DELETE_USUARIO = 'DELETE_USUARIO';
export const FETCH_USUARIO = 'FETCH_USUARIO';
export const STORE_USUARIO = 'STORE_USUARIO';

export class AddUsuario implements Action{
    readonly type = ADD_USUARIO;
    constructor(public payload:Usuario){}
}

export class SetUsuario implements Action{
    readonly type = SET_USUARIO;
    constructor(public payload:Usuario[]){}
}

export class UpdateUsuario implements Action{
    readonly type = UPDATE_USUARIO;
    constructor(public payload:{old: Usuario, new: Usuario}){}
}

export class DeleteUsuario implements Action{
    readonly type = DELETE_USUARIO;
    constructor(public payload:Usuario){}
}

export class FetchUsuario implements Action{
    readonly type = FETCH_USUARIO;
    constructor(public payload:Usuario){}
}

export class StoreUsuario implements Action{
    readonly type = STORE_USUARIO;
    constructor(public payload:Usuario){}
}

export type UsuarioActions = AddUsuario | SetUsuario | UpdateUsuario | DeleteUsuario | FetchUsuario | StoreUsuario;