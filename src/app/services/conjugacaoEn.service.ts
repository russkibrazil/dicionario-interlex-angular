import { MethodsServicesDicionario } from './intefaceBase';
import { ConjugacaoEn } from '../models/ConjugacaoEn';
import { Injectable } from '@angular/core';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';
import { RespostaMySql, RespostaErroMySql } from '../shared/mysql/resposta';
import { Subject } from 'rxjs';
import { MostraEquivalenciasConjugacaoView } from '../models/MostraEquivalenciasConjugacaoView';
import { GeradorFiltro } from '../shared/mysql/geradorFiltro';

@Injectable({providedIn: 'root'})
export class ConjugacaoEnService implements MethodsServicesDicionario<ConjugacaoEn>{
    private cEn : ConjugacaoEn[]  = [];
    public sCEn = new Subject<ConjugacaoEn[]>();
    public sEqConjugacaoEn = new Subject<MostraEquivalenciasConjugacaoView[]>();

    constructor(private mysql : MySqlConnectorService){}

    add(item: ConjugacaoEn) {
        this.cEn = this.cEn.concat(item);
        this.updateSubject();
    }    
    set(item: ConjugacaoEn[]) {
        this.cEn = item;
        this.updateSubject();
    }
    update(item: ConjugacaoEn, updateOn: ConjugacaoEn): boolean {
        const iu = this.cEn.findIndex(e => e === updateOn);
        if (iu == -1)
            return false;
        this.cEn.splice(iu, 1);
        this.add(item);
        return true;
    }
    delete(item: ConjugacaoEn): boolean {
        const id = this.cEn.findIndex(e => e === item);
        if (id == -1)
            return false;
        this.cEn.splice(id, 1);
        this.updateSubject();
        return true;
    }
    fetch(filtros: string[]): boolean {
        const subsc = this.mysql.readOperationFiltered('conjugacao', filtros);
        let e = false;
        subsc.subscribe(
            (resp : RespostaMySql<ConjugacaoEn>) => {
                if (resp.records.length > 0){
                  this.set(resp.records);
                  e = true;
                }
                else{
                  console.log('Nenhum registro encontrado');
                }
            },
            (err: RespostaErroMySql<ConjugacaoEn>) => {
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

    get():ConjugacaoEn[]{
        return this.cEn;
    }

    fetchEqConjugacaoEnView(id : number){
        const subsc = this.mysql.readOperationFiltered('MostraEquivalenciasConjugacaoView', [GeradorFiltro.filtroAnd(true) + GeradorFiltro.igual('Id', id)]);
        let e = false;
        subsc.subscribe(
            (resp : RespostaMySql<MostraEquivalenciasConjugacaoView>) => {
                if (resp.records.length > 0){
                  this.sEqConjugacaoEn.next(resp.records);
                  e = true;
                }
                else{
                  console.log('Nenhum registro encontrado');
                }
            },
            (err: RespostaErroMySql<MostraEquivalenciasConjugacaoView>) => {
                if (err.error.records.length > 0){
                    this.sEqConjugacaoEn.next(err.error.records);
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

    private updateSubject(){
        this.sCEn.next(this.cEn);
    }
}