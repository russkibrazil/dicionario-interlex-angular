import { MethodsServicesDicionario } from './intefaceBase';
import { Fraseologia } from '../models/Fraseologia';
import { Injectable } from '@angular/core';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';
import { RespostaMySql, RespostaErroMySql } from '../shared/mysql/resposta';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FraseologiaService implements MethodsServicesDicionario<Fraseologia>{
    private fraseologia : Fraseologia[] = [];
    public sFraseologia = new Subject<Fraseologia[]>();

    constructor(private mysql : MySqlConnectorService){}

    add(item: Fraseologia) {
        this.fraseologia = this.fraseologia.concat(item);
        this.updateSubject();
        const c = this.mysql.createOperation('fraseologia', JSON.stringify(item));
        c.subscribe(
            r => console.log(r),
            er => console.log(er)
        );
    }    
    set(item: Fraseologia[]) {
        this.fraseologia = item;
        this.updateSubject();
    }
    update(item: Fraseologia, updateOn: Fraseologia): boolean {
        const iu = this.fraseologia.findIndex(e => e == updateOn);
        if (iu == -1)
            return false;
        this.fraseologia.splice(iu,1);
        this.fraseologia = this.fraseologia.concat(item);
        this.updateSubject();
        return true;
    }
    delete(item: Fraseologia): boolean {
        const id = this.fraseologia.findIndex(e => e == item);
        if (id == -1)
            return false;
        this.fraseologia.splice(id,1);
        this.updateSubject();
        return true;
    }
    fetch(filtros: string[]): boolean {
        const subs = this.mysql.readOperationFiltered('fraseologia', filtros);
        let e  = false;
        subs.subscribe(
            (resp : RespostaMySql<Fraseologia>) => {
                if (resp.records.length > 0){
                  this.set(resp.records);
                  e = true;
                }
                else{
                  console.log('Nenhum registro encontrado');
                }
            },
            (err: RespostaErroMySql<Fraseologia>) => {
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
    get():Fraseologia[]{
        return this.fraseologia;
    }

    private updateSubject(){
        this.sFraseologia.next(this.fraseologia);
    }
}