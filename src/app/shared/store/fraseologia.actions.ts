import {Action} from '@ngrx/store';
import {Fraseologia} from '../../models/Fraseologia';

export const ADD_FRASEOLOGIA = 'ADD_FRASEOLOGIA'
export const SET_FRASEOLOGIA = 'SET_FRASEOLOGIA';
export const UPDATE_FRASEOLOGIA = 'UPDATE_FRASEOLOGIA';
export const DELETE_FRASEOLOGIA = 'DELETE_FRASEOLOGIA';
export const FETCH_FRASEOLOGIA = 'FETCH_FRASEOLOGIA';
export const STORE_FRASEOLOGIA = 'STORE_FRASEOLOGIA';


export class AddFraseologia implements Action{
    readonly type = ADD_FRASEOLOGIA;
    constructor(public payload:Fraseologia){}
}

export class SetFraseologia implements Action{
    readonly type = SET_FRASEOLOGIA;
    constructor(public payload:Fraseologia){}
}

export class UpdateFraseologia implements Action{
    readonly type = UPDATE_FRASEOLOGIA;
    constructor(public payload:{old: Fraseologia, new: Fraseologia}){}
}

export class DeleteFraseologia implements Action{
    readonly type = DELETE_FRASEOLOGIA;
    constructor(public payload:Fraseologia){}
}

export class FetchFraseologia implements Action{
    readonly type = FETCH_FRASEOLOGIA;
    constructor(public payload:Fraseologia){}
}

export class StoreFraseologia implements Action{
    readonly type = STORE_FRASEOLOGIA;
    constructor(public payload:Fraseologia){}
}

export type FraseologiaActions = AddFraseologia | SetFraseologia | UpdateFraseologia | DeleteFraseologia | FetchFraseologia | StoreFraseologia;