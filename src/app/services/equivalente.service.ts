import { MethodsServicesDicionario } from './intefaceBase';
import { Equivalente } from '../models/Equivalente';
import { Injectable } from '@angular/core';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';
import { GeradorFiltro } from '../shared/mysql/geradorFiltro';
import { Subject } from 'rxjs';
import { MostraPalavraEquivalenciasView } from '../models/MostraPalavraEquivalenciasView';
import { RespostaMySql, RespostaErroMySql } from '../shared/mysql/resposta';

@Injectable({providedIn: 'root'})
export class EquivalenteService implements MethodsServicesDicionario<Equivalente>{
    private equivalentes : Equivalente[] = [];
    public sEquivalentes : Subject<Equivalente[]>
    public sPEquivalentes = new Subject<MostraPalavraEquivalenciasView[]>();

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
            (resp : RespostaMySql<Equivalente>) => {
                if (resp.records.length > 0){
                  this.set(resp.records);
                  e = true;
                }
                else{
                  console.log('Nenhum registro encontrado');
                }
            },
            (err: RespostaErroMySql<Equivalente>) => {
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

    fetchPEquivalentesView (id : number){
        const obsvPe = this.mysql.readOperationFiltered('MostraPalavraEquivalenciasView', [GeradorFiltro.filtroAnd() + GeradorFiltro.igual('Id', id)]);
        let e = false;
        obsvPe.subscribe(
            (resp : RespostaMySql<MostraPalavraEquivalenciasView>) => {
                if (resp.records.length > 0){
                  this.sPEquivalentes.next(resp.records);
                  e = true;
                }
                else{
                  console.log('Nenhum registro encontrado');
                }
            },
            (err: RespostaErroMySql<MostraPalavraEquivalenciasView>) => {
                if (err.error.records.length > 0){
                    this.sPEquivalentes.next(err.error.records);
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
}