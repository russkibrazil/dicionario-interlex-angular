import { MethodsServicesDicionario } from './intefaceBase';
import { ConjugacaoPt } from '../models/ConjugacaoPt';
import { Injectable } from '@angular/core';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';

@Injectable({providedIn: 'root'})
export class ConjugacaoPtService implements MethodsServicesDicionario<ConjugacaoPt>{
    private cPt : ConjugacaoPt[]  = [];

    constructor(private mysql : MySqlConnectorService){}

    add(item: ConjugacaoPt) {
        this.cPt = this.cPt.concat(item);
    }    
    set(item: ConjugacaoPt[]) {
        this.cPt = item;
    }
    update(item: ConjugacaoPt, updateOn: ConjugacaoPt): boolean {
        const iu = this.cPt.findIndex(e => e === updateOn);
        if (iu == -1)
            return false;
        this.cPt.splice(iu, 1);
        this.add(item);
        return true;
    }
    delete(item: ConjugacaoPt): boolean {
        const id = this.cPt.findIndex(e => e === item);
        if (id == -1)
            return false;
        this.cPt.splice(id, 1);
        return true;
    }
    fetch(filtros: string[]): boolean {
        const subsc = this.mysql.readOperationFiltered('conjugacao', filtros);
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