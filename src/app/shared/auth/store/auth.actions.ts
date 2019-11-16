import {Action, createAction, props} from '@ngrx/store';

export const TRY_SIGNIN = createAction(
    'TRY_SIGNIN', 
    props<{username: string; password: string;}>()
);
export const TRY_SIGNUP = createAction('TRY_SIGNUP');
export const SIGNIN = createAction('SIGNIN');
export const SIGNUP = createAction('SIGNUP');
export const LOGOUT = createAction('LOGOUT');