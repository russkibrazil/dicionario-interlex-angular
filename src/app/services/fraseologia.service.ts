import { MethodsServicesDicionario } from './intefaceBase';
import { Fraseologia } from '../models/Fraseologia';
import { Injectable } from '@angular/core';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';

@Injectable({providedIn: 'root'})
export class FraseologiaService implements MethodsServicesDicionario<Fraseologia>{
    private fraseologia : Fraseologia[] = [];

    constructor(private mysql : MySqlConnectorService){}

    add(item: Fraseologia) {
        this.fraseologia = this.fraseologia.concat(item);
    }    
    set(item: Fraseologia[]) {
        this.fraseologia = item;
    }
    update(item: Fraseologia, updateOn: Fraseologia): boolean {
        const iu = this.fraseologia.findIndex(e => e == updateOn);
        if (iu == -1)
            return false;
        this.fraseologia.splice(iu,1);
        this.add(item);
        return true;
    }
    delete(item: Fraseologia): boolean {
        const id = this.fraseologia.findIndex(e => e == item);
        if (id == -1)
            return false;
        this.fraseologia.splice(id,1);
        return true;
    }
    fetch(filtros: string[]): boolean {
        const subs = this.mysql.readOperationFiltered('fraseologia', filtros);
        let e  = false;
        subs.subscribe(
            resp => {
                if (resp != undefined){
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