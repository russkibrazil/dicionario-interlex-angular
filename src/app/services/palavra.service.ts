import { Injectable } from '@angular/core';
import { Palavra } from '../models/Palavra';
import { MethodsServicesDicionario } from './intefaceBase';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';

@Injectable({providedIn: 'root'})
export class PalavraService implements MethodsServicesDicionario<Palavra>{
    private palavras : Palavra[] = [];
    private palavraAtiva : Palavra;

    constructor(private mysql : MySqlConnectorService){}

    add(p : Palavra) {
        this.palavras = this.palavras.concat(p);
    }
    set(p : Palavra[]) {
        this.palavras = p;
    }
    update(p : Palavra, updateOn: Palavra) : boolean {
        const iu = this.palavras.findIndex(e => e == updateOn);
        if (iu == -1)
            return false;
        this.palavras.splice(iu,1);
        this.add(p);
        return true;
    }
    delete(p : Palavra) {
        const id = this.palavras.findIndex(e => e == p);
        if (id == -1)
            return false;
        this.palavras.splice(id,1);
        return true;
    }
    fetch(filtros : string[]) {
        const subsc = this.mysql.readOperationFiltered('palavra', filtros);
        let  e  = false;
        subsc.subscribe(
            resp  =>{
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
    store() : boolean {
        throw new Error("Method not implemented.");
    }
    setPalavraAtiva(item: Palavra){
        this.palavraAtiva = item;
    }
    getPalavraAtiva():Palavra{
        return this.palavraAtiva;
    }

}