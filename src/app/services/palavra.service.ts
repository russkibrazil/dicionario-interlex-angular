import { Injectable } from '@angular/core';
import { Palavra } from '../models/Palavra';
import { MethodsServicesDicionario } from './intefaceBase';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';
import { Subject } from 'rxjs';
import { RespostaMySql, RespostaErroMySql } from '../shared/mysql/resposta';

@Injectable({providedIn: 'root'})
export class PalavraService implements MethodsServicesDicionario<Palavra>{
    private palavras : Palavra[] = [];
    private palavraAtiva : Palavra;
    public sPalavras = new Subject<Palavra[]>();

    constructor(private mysql : MySqlConnectorService){}

    add(p : Palavra) {
        this.palavras = this.palavras.concat(p);
        this.updateSubject();
    }
    set(p : Palavra[]) {
        this.palavras = p;
        this.updateSubject();
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
        this.updateSubject();
        return true;
    }
    fetch(filtros : string[]) {
        const subsc = this.mysql.readOperationFiltered('palavra', filtros);
        let  e  = false;
        subsc.subscribe(
            (resp : RespostaMySql<Palavra>) => {
                if (resp.records.length > 0){
                  this.set(resp.records);
                  e = true;
                }
                else{
                  console.log('Nenhum registro encontrado');
                }
            },
            (err: RespostaErroMySql<Palavra>) => {
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
    store() : boolean {
        throw new Error("Method not implemented.");
    }
    setPalavraAtiva(item: Palavra){
        this.palavraAtiva = item;
    }
    getPalavraAtiva():Palavra{
        return this.palavraAtiva;
    }

    get() : Palavra[] {
        return this.palavras;
    }

    private updateSubject(){
        this.sPalavras.next(this.palavras);
    }
}