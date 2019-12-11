import { MethodsServicesDicionario } from './intefaceBase';
import { ConjugacaoPt } from '../models/ConjugacaoPt';
import { Injectable } from '@angular/core';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';
import { RespostaMySql, RespostaErroMySql } from '../shared/mysql/resposta';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ConjugacaoPtService implements MethodsServicesDicionario<ConjugacaoPt>{
    private cPt : ConjugacaoPt[]  = [];
    public sCPt = new Subject<ConjugacaoPt[]>();

    constructor(private mysql : MySqlConnectorService){}

    add(item: ConjugacaoPt) {
        this.cPt = this.cPt.concat(item);
        this.updateSubject();
    }    
    set(item: ConjugacaoPt[]) {
        this.cPt = item;
        this.updateSubject();
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
        this.updateSubject();
        return true;
    }
    fetch(filtros: string[]): boolean {
        const subsc = this.mysql.readOperationFiltered('conjugacao', filtros);
        let e = false;
        subsc.subscribe(
            (resp : RespostaMySql<ConjugacaoPt>) => {
                if (resp.records.length > 0){
                  this.set(resp.records);
                  e = true;
                }
                else{
                  console.log('Nenhum registro encontrado');
                }
            },
            (err: RespostaErroMySql<ConjugacaoPt>) => {
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

    private updateSubject(){
        this.sCPt.next(this.cPt);
    }
}