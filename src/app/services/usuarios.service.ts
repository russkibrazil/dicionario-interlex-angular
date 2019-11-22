import { MethodsServicesDicionario } from './intefaceBase';
import { Usuario } from '../models/Usuario';
import { Injectable } from '@angular/core';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';

@Injectable({providedIn: 'root'})
export class UsuarioService implements MethodsServicesDicionario<Usuario>{
    private usuarios : Usuario[] = [];

    constructor(private mysql : MySqlConnectorService){}

    add(item: Usuario) {
        this.usuarios = this.usuarios.concat(item);
    }    
    set(item: Usuario[]) {
        this.usuarios = item;
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
        return true;
    }
    fetch(filtros: string[]): boolean {
       const subsc = this.mysql.readOperationFiltered('usr', filtros);
       let e = false;
       subsc.subscribe(
           resp => {
               if (resp !== undefined){
                   e = true;
                   this.set(resp);
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

    
}