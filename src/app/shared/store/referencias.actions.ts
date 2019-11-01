import {Action} from '@ngrx/store';
import {Referencia} from '../../models/Referencia';

export const ADD_REFERENCIA = 'ADD_REFERENCIA'
export const SET_REFERENCIA = 'SET_REFERENCIA';
export const UPDATE_REFERENCIA = 'UPDATE_REFERENCIA';
export const DELETE_REFERENCIA = 'DELETE_REFERENCIA';
export const FETCH_REFERENCIA = 'FETCH_REFERENCIA';
export const STORE_REFERENCIA = 'STORE_REFERENCIA';

export class AddReferencia implements Action{
    readonly type = ADD_REFERENCIA;
    constructor(public payload:Referencia){}
}

export class SetReferencia implements Action{
    readonly type = SET_REFERENCIA;
    constructor(public payload:Referencia){}
}

export class UpdateReferencia implements Action{
    readonly type = UPDATE_REFERENCIA;
    constructor(public payload:{old: Referencia, new: Referencia}){}
}

export class DeleteReferencia implements Action{
    readonly type = DELETE_REFERENCIA;
    constructor(public payload:Referencia){}
}

export class FetchReferencia implements Action{
    readonly type = FETCH_REFERENCIA;
    constructor(public payload:Referencia){}
}

export class StoreReferencia implements Action{
    readonly type = STORE_REFERENCIA;
    constructor(public payload:Referencia){}
}

export type ReferenciasActions = AddReferencia | SetReferencia | UpdateReferencia | DeleteReferencia | FetchReferencia | StoreReferencia;