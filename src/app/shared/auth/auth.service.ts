import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Injectable()
export class AuthService{
    private loggedin : boolean = false;
    private level : string = 'USR';
    private who : Usuario;

    isAuthenticated():boolean{
        return this.loggedin;
    }
    whatLevel(){
        return this.level;
    }
    login(l:string){
        this.level = l;
        this.loggedin = true;
    }
    logout(){
        this.loggedin = false;
        this.level  = 'USR';
        this.who = undefined;
    }
}