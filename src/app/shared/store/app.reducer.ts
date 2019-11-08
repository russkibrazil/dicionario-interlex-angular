import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromPalavra from './palavras.reducer';

export interface AppState{
    palavra: fromPalavra.State,
    auth:fromAuth.State
}
export const reducers: ActionReducerMap<AppState> = {
    palavra: fromPalavra.palavraReducer,
    auth: fromAuth.authReducer
};