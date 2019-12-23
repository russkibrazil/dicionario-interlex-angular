import { Injectable } from '@angular/core';
import { Palavra } from '../models/Palavra';
import { MethodsServicesDicionario } from './intefaceBase';
import { MySqlConnectorService } from '../shared/mysql/mysql.service';
import { Subject } from 'rxjs';
import { RespostaMySql, RespostaErroMySql } from '../shared/mysql/resposta';

@Injectable({providedIn: 'root'})
export class PalavraService implements MethodsServicesDicionario<Palavra>{
    store(items: Palavra[]): boolean {
        throw new Error("Method not implemented.");
    }
    private palavras : Palavra[] = [];
    private palavraAtiva : Palavra;
    public sPalavras = new Subject<Palavra[]>();

    constructor(private mysql : MySqlConnectorService){}

    add(p : Palavra) {
        this.palavras = this.palavras.concat(p);
        this.storeNewItems(p);
        this.updateSubject();
    }
    set(p : Palavra[]) {
        p.forEach( el => {
            switch (el.Genero){
                case 'M':
                    el.Genero = 'Masculino';
                    break;
                case 'F':
                    el.Genero = 'Feminino';
                    break;
                case 'N':
                    el.Genero = 'Neutro';
                    break;
                case 'S':
                    el.Genero = 'Sem Gênero';
                    break;
                default:
                    break;
            }
            switch (el.Idioma){
                case 'PT':
                    el.Idioma = 'Português';
                    break;
                case 'EN':
                    el.Idioma = 'Inglês';
                    break;
                case 'ES':
                    el.Idioma = 'Espanhol';
                    break;
                default:
                    break;
            }
        });
        this.palavras = p;
        this.updateSubject();
    }
    update(p : Palavra, updateOn: Palavra) : boolean {
        const iu = this.palavras.findIndex(e => e == updateOn);
        if (iu == -1)
            return false;
        this.palavras.splice(iu,1);
        this.palavras = this.palavras.concat(p);
        this.storeUpdatedItems(p);
        this.updateSubject();
        return true;
    }
    delete(p : Palavra) {
        const id = this.palavras.findIndex(e => e == p);
        if (id == -1)
            return false;
        this.palavras.splice(id,1);
        this.updateSubject();
        const c = this.mysql.deleteOperation('palavra', p.Id.toString());
        c.subscribe(
            r => console.log(r),
            er => console.log(er)
        );
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
    private storeNewItems(item : Palavra) {
        switch (item.Genero){
            case 'Masculino':
                item.Genero = 'M';
                break;
            case 'Feminino':
                item.Genero = 'F';
                break;
            case 'Neutro':
                item.Genero = 'N';
                break;
            case 'Sem gênero':
                item.Genero = 'S';
                break;
            default:
                break;
        }
        switch (item.Idioma){
            case 'Portguês':
                item.Idioma = 'PT';
                break;
            case 'Inglês':
                item.Idioma = 'EN';
                break;
            case 'Espanhol':
                item.Idioma = 'ES';
                break;
            default:
                break;
        }
        const subsc = this.mysql.createOperation('palavra', JSON.stringify(item));
        subsc.subscribe(
            resp => console.log(resp),
            err => console.log('error: ', err)
        )
    }
    private storeUpdatedItems(item : Palavra) {
        switch (item.Genero){
            case 'Masculino':
                item.Genero = 'M';
                break;
            case 'Feminino':
                item.Genero = 'F';
                break;
            case 'Neutro':
                item.Genero = 'N';
                break;
            case 'Sem gênero':
                item.Genero = 'S';
                break;
            default:
                break;
        }
        switch (item.Idioma){
            case 'Portguês':
                item.Idioma = 'PT';
                break;
            case 'Inglês':
                item.Idioma = 'EN';
                break;
            case 'Espanhol':
                item.Idioma = 'ES';
                break;
            default:
                break;
        }
        const subsc = this.mysql.updateOperationPk('palavra', JSON.stringify(item), item.Id.toString());
        subsc.subscribe(
            resp => console.log(resp),
            err => console.log('error: ', err)
        )
    }

    getElement(id : number):Palavra{
        if (id !== undefined)
            return this.palavras.find(
                p => p.Id === id
            )
    }

    get() : Palavra[] {
        return this.palavras;
    }

    private updateSubject(){
        this.sPalavras.next(this.palavras);
    }
}