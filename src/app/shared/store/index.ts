import { createSelector } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromEquivalente from '../store/equivalente.reducer';
import * as fromFraseologia from '../store/fraseologia.reducer';
import * as fromPalavras from '../store/palavras.reducer';
import * as fromReferencias from '../store/referencias.reducer';
import * as fromUsuarios from '../store/usuarios.reducer';

export interface FeatureState{
    auth:fromAuth.State
}

export interface AppState{
    ft: FeatureState;
    equivalente: fromEquivalente.State,
    fraseologia: fromFraseologia.State,
    palavras: fromPalavras.State,
    referencias: fromReferencias.State,
    usuarios: fromUsuarios.State
}

export const selectFeature = (state: AppState) => state.ft;
export const selectAuth = createSelector(
    selectFeature, (state : FeatureState) => state.auth);

export const selectEquivalente = (state:AppState) => state.equivalente;
export const selectFraseologia = (state:AppState) => state.fraseologia;
export const selectPalavras = (state:AppState) => state.palavras;
export const selectReferencias = (state:AppState) => state.referencias;
export const selectUsuarios = (state:AppState) => state.usuarios;

