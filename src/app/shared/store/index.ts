import * as fromAuth from '../auth/store/auth.reducer';
import { createSelector } from '@ngrx/store';

export interface FeatureState{
    auth:fromAuth.State
}

export interface AppState{
    ft: FeatureState;
}

export const selectFeature = (state: AppState) => state.ft;

export const selectAuth = createSelector(selectFeature, (state : FeatureState) => state.auth);