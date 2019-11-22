import { MethodsServicesDicionario } from './intefaceBase';
import { Referencia } from '../models/Referencia';
import { Injectable } from '@angular/core';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';

@Injectable({providedIn: 'root'})
export class ReferenciaService implements MethodsServicesDicionario<Referencia>{
    private referencias : Referencia[] = [];

    constructor(private mysql : MySqlConnectorService){}

    add(item: Referencia) {
        this.referencias = this.referencias.concat(item);
    }    
    set(item: Referencia[]) {
        this.referencias = item;
    }
    update(item: Referencia, updateOn: Referencia): boolean {
        const iu = this.referencias.findIndex(e => e == updateOn);
        if (iu == -1)
            return false;
        this.referencias.splice(iu,1);
        this.add(item);
        return true;
    }
    delete(item: Referencia): boolean {
        const id = this.referencias.findIndex(e => e == item);
        if (id == -1)
            return false;
        this.referencias.splice(id,1);
        return true;
    }
    fetch(filtros: string[]): boolean {
        const subsc = this.mysql.readOperationFiltered('referencias', filtros);
        let e = false;
        subsc.subscribe(resp => {
            if (resp != undefined){
                e = true;
                this.set(resp);
            }
        });
        if (e)
            return true;
        else
            return false;
    }
    store(): boolean {
        throw new Error("Method not implemented.");
    }

    
}