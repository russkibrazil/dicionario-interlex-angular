import { MethodsServicesDicionario } from './intefaceBase';
import { Referencia } from '../models/Referencia';
import { Injectable } from '@angular/core';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';
import { Subject } from 'rxjs';
import { RespostaMySql, RespostaErroMySql } from '../shared/mysql/resposta';

@Injectable({providedIn: 'root'})
export class ReferenciaService implements MethodsServicesDicionario<Referencia>{
    private referencias : Referencia[] = [];
    public sReferencias = new Subject<Referencia[]>();

    constructor(private mysql : MySqlConnectorService){}

    add(item: Referencia) {
        this.referencias = this.referencias.concat(item);
        this.updateSubject();
        const c = this.mysql.createOperation('referencias', JSON.stringify(item));
        c.subscribe(
            r => console.log(r),
            er => console.log(er)
        );
    }    
    set(item: Referencia[]) {
        this.referencias = item;
        this.updateSubject();
    }
    update(item: Referencia, updateOn: Referencia): boolean {
        const iu = this.referencias.findIndex(e => e == updateOn);
        if (iu == -1)
            return false;
        this.referencias.splice(iu,1);
        this.referencias = this.referencias.concat(item);
        this.updateSubject();
        const c = this.mysql.updateOperationPk('referencias', JSON.stringify(item), updateOn.Id.toString());
        c.subscribe(
            r => console.log(r),
            er => console.log(er)
        );
        return true;
    }
    delete(item: Referencia): boolean {
        const id = this.referencias.findIndex(e => e == item);
        if (id == -1)
            return false;
        this.referencias.splice(id,1);
        this.updateSubject();
        const c = this.mysql.deleteOperation('referencias', item.Id.toString());
        c.subscribe(
            r => console.log(r),
            er => console.log(er)
        );
        return true;
    }
    fetch(filtros: string[]): boolean {
        const subsc = this.mysql.readOperationFiltered('referencias', filtros);
        let e = false;
        subsc.subscribe( 
            (resp : RespostaMySql<Referencia>) => {
            if (resp.records.length > 0){
              this.set(resp.records);
              e = true;
            }
            else{
              console.log('Nenhum registro encontrado');
            }
        },
        (err: RespostaErroMySql<Referencia>) => {
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

    get(){
        return this.referencias;
    }

    private updateSubject(){
        this.sReferencias.next(this.referencias);
    }
}