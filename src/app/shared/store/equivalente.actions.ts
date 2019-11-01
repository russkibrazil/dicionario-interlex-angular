import {Action} from '@ngrx/store';
import {Equivalente} from '../../models/Equivalente';

export const ADD_EQUIVALENTE = 'ADD_EQUIVALENTE'
export const SET_EQUIVALENTE = 'SET_EQUIVALENTE';
export const UPDATE_EQUIVALENTE = 'UPDATE_EQUIVALENTE';
export const DELETE_EQUIVALENTE = 'DELETE_EQUIVALENTE';
export const FETCH_EQUIVALENTE = 'FETCH_EQUIVALENTE';
export const STORE_EQUIVALENTE = 'STORE_EQUIVALENTE';

export class AddEquivalente implements Action{
    readonly type = ADD_EQUIVALENTE;
    constructor(public payload:Equivalente){}
}

export class SetEquivalente implements Action{
    readonly type = SET_EQUIVALENTE;
    constructor(public payload:Equivalente){}
}

export class UpdateEquivalente implements Action{
    readonly type = UPDATE_EQUIVALENTE;
    constructor(public payload:{old: Equivalente, new: Equivalente}){}
}

export class DeleteEquivalente implements Action{
    readonly type = DELETE_EQUIVALENTE;
    constructor(public payload:Equivalente){}
}

export class FetchEquivalente implements Action{
    readonly type = FETCH_EQUIVALENTE;
    constructor(public payload:Equivalente){}
}

export class StoreEquivalente implements Action{
    readonly type = STORE_EQUIVALENTE;
    constructor(public payload:Equivalente){}
}

export type EquivalenteActions = AddEquivalente | SetEquivalente | UpdateEquivalente | DeleteEquivalente | FetchEquivalente | StoreEquivalente;