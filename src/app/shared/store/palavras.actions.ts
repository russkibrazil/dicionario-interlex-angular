import {Action} from '@ngrx/store';
import {Palavra} from '../../models/Palavra';

export const ADD_PALAVRA = 'ADD_PALAVRA'
export const SET_PALAVRA = 'SET_PALAVRA';
export const UPDATE_PALAVRA = 'UPDATE_PALAVRA';
export const DELETE_PALAVRA = 'DELETE_PALAVRA';
export const FETCH_PALAVRA = 'FETCH_PALAVRA';
export const STORE_PALAVRA = 'STORE_PALAVRA';

export class AddPalavra implements Action{
    readonly type = ADD_PALAVRA;
    constructor(public payload:Palavra){}
}

export class SetPalavra implements Action{
    readonly type = SET_PALAVRA;
    constructor(public payload:Palavra){}
}

export class UpdatePalavra implements Action{
    readonly type = UPDATE_PALAVRA;
    constructor(public payload:{old: Palavra, new: Palavra}){}
}

export class DeletePalavra implements Action{
    readonly type = DELETE_PALAVRA;
    constructor(public payload:Palavra){}
}

export class FetchPalavra implements Action{
    readonly type = FETCH_PALAVRA;
    constructor(public payload:Palavra){}
}

export class StorePalavra implements Action{
    readonly type = STORE_PALAVRA;
    constructor(public payload:Palavra){}
}

export type PalavrasActions = AddPalavra | SetPalavra | UpdatePalavra | DeletePalavra | FetchPalavra | StorePalavra;