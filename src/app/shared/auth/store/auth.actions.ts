import {Action} from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';

export class TrySignup implements Action{
    readonly type = TRY_SIGNUP;
    constructor(public payload: {username: string, password: string}){}
}

export class TrySignin implements Action{
    readonly type = TRY_SIGNIN;
    constructor(public payload: {username: string, password: string}){}
}

export class Signup implements Action{
    readonly type = SIGNUP;
    constructor(public payload: string){}
}

export class Signin implements Action{
    readonly type = SIGNIN;
    constructor(public payload: string){}
}

export class Logout implements Action{
    readonly type = LOGOUT;
}

export type AuthActions = Signup | Signin | Logout | TrySignup | TrySignin;