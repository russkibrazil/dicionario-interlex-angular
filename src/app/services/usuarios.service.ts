import { MethodsServicesDicionario } from './intefaceBase';
import { Usuario } from '../models/Usuario';
import { Injectable } from '@angular/core';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';
import { Subject } from 'rxjs';
import { RespostaMySql, RespostaErroMySql } from '../shared/mysql/resposta';

@Injectable({providedIn: 'root'})
export class UsuarioService implements MethodsServicesDicionario<Usuario>{
    private usuarios : Usuario[] = [];
    public sUsuarios = new Subject<Usuario[]>();

    constructor(private mysql : MySqlConnectorService){}

    add(item: Usuario) {
        this.usuarios = this.usuarios.concat(item);
        this.updateSubject();
    }    
    set(item: Usuario[]) {
        this.usuarios = item;
        this.updateSubject();
    }
    update(item: Usuario, updateOn: Usuario): boolean {
        const iu = this.usuarios.findIndex(e => e == updateOn);
        if (iu == -1)
            return false;
        this.usuarios.splice(iu,1);
        this.add(item);
        return true;
    }
    delete(item: Usuario): boolean {
        const id = this.usuarios.findIndex(e => e == item);
        if (id == -1)
            return false;
        this.usuarios.splice(id,1);
        this.updateSubject();
        return true;
    }
    fetch(filtros: string[]): boolean {
       const subsc = this.mysql.readOperationFiltered('usr', filtros);
       let e = false;
       subsc.subscribe(
        (resp : RespostaMySql<Usuario>) => {
            if (resp.records.length > 0){
              this.set(resp.records);
              e = true;
            }
            else{
              console.log('Nenhum registro encontrado');
            }
        },
        (err: RespostaErroMySql<Usuario>) => {
            if (err.error.records.length > 0){
                this.set(err.error.records);
                e = true;
            }
            else{
                console.log('Nenhum registro encontrado');
            }
        }
    );
    if (e)
        return true;
    else
        return false;
    }
    store(): boolean {
        throw new Error("Method not implemented.");
    }
    get (){
        return this.usuarios;
    }
    private updateSubject(){
        this.sUsuarios.next(this.usuarios);
    }
}