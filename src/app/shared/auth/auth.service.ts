import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { MySqlConnectorService } from '../mysql/mysql.service';
import { GeradorFiltro } from '../mysql/geradorFiltro';
import { RespostaErroMySql, RespostaMySql } from '../mysql/resposta';

@Injectable()
export class AuthService{
    private loggedin : boolean = false;
    private level : string = 'USR';
    private who : Usuario;
    

    constructor(private mysql: MySqlConnectorService){}

    isAuthenticated():boolean{
        return this.loggedin;
    }
    whatLevel(){
        return this.level;
    }
    tryLogin(u: string, p :string) : boolean{
        this.mysql.readOperationFiltered('usr', [GeradorFiltro.filtroAnd(true) + GeradorFiltro.igual('usr',u), GeradorFiltro.filtroAnd() + GeradorFiltro.igual('pass',p)]).subscribe(
            (resp:RespostaMySql<Usuario>) => {
                if (resp.records.length == 1){
                    this.who = resp.records[0];
                    this.login(this.who.nivel_permissao);
                    return true;
                }
            },
            //https://www.cloudhadoop.com/2018/08/typescript-how-to-convert-object-to.html
            (error :RespostaErroMySql<Usuario>) => {
                if(error.error.records.length == 1){
                   // Object.keys(error.error.records).map()
                    this.who = error.error.records[0] as Usuario;
                    this.login(error.error.records[0].nivel_permissao);
                    return true;
                }
            }
        );
        return false;
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