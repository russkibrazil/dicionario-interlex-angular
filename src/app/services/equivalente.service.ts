import { MethodsServicesDicionario } from './intefaceBase';
import { Equivalente } from '../models/Equivalente';
import { Injectable } from '@angular/core';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';

@Injectable({providedIn: 'root'})
export class EquivalenteService implements MethodsServicesDicionario<Equivalente>{
    private equivalentes : Equivalente[] = [];

    constructor(private mysql : MySqlConnectorService){}

    add(item: Equivalente) {
        this.equivalentes = this.equivalentes.concat(item);
    }    
    set(item: Equivalente[]) {
        this.equivalentes = item;
    }
    update(item: Equivalente, updateOn: Equivalente): boolean {
        const iu = this.equivalentes.findIndex(e => e === updateOn);
        if (iu == -1)
            return false;
        this.equivalentes.splice(iu,1);
        this.add(item);
        return true;
    }
    delete(item: Equivalente): boolean {
        const id = this.equivalentes.findIndex(e => e == item);
        if (id == -1)
            return false;
        this.equivalentes.splice(id, 1);
        return true;
    }
    fetch(filtros: string[]): boolean {
        const subsc = this.mysql.readOperationFiltered('equivalente', filtros);
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