//https://www.techiediaries.com/php-angular-crud-api-httpclient-forms/

//https://www.codexworld.com/angularjs-crud-operations-php-mysql/
//https://phpenthusiast.com/blog/angular-php-app-creating-new-item-with-httpclient-post
//https://stackoverflow.com/questions/15485354/angularjs-http-post-to-php-and-undefined


/*
    Problemas no CORS
    https://www.hiago.me/2018/09/08/ionic-angular-fazendo-o-cors-seu-amigo/
    https://www.techiediaries.com/angular-httpclient/
*/

/* MYSQL gone away
    https://dev.mysql.com/doc/refman/8.0/en/gone-away.html
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MySqlConnectorService {
    private readonly baseUrl = 'http://localhost:8080/api/records';
    
    constructor(private httpClient: HttpClient) { }
    
    readOperationPk(tabela:string, registro?:number[]) : Observable<any> {
        let site : string = (this.baseUrl + '/' + tabela );
        if (registro){
            let sreg : string = registro.splice(0,1).toString();
            registro.forEach(el => {
                sreg.concat(',', el.toString());
            });
            site =  '/' + sreg;
        }
        
        return this.httpClient.get(site,{
            observe: 'body',
            responseType: 'json'
        });
    }

    readOperationFiltered(tabela:string, filtro:string[]):Observable<any>{
        let site : string = (this.baseUrl + '/' + tabela + '?');
        site = site.concat(...filtro);
        return this.httpClient.get(site, {
            observe: 'body',
            responseType: 'json',
            withCredentials: false
        });
    }

    createOperation(tabela:string, dados:string) : Observable<any> {
        return this.httpClient.post((this.baseUrl + '/' + tabela), dados);
    }

    updateOperation(tabela:string, dados:string, filtro:string[]): Observable<any> {
        let target : string = this.baseUrl + '/' + tabela + '?';
        target = target.concat(...filtro);
        return this.httpClient.put(target, dados);
    }

    updateOperationPk(tabela:string, dados:string, pk : string): Observable<any> {
        let target : string = this.baseUrl + '/' + tabela + '/' + pk;
        return this.httpClient.put(target, dados);
    }

    deleteOperation(tabela:string, pk : string) : Observable<any>{
        let target : string = this.baseUrl + '/' + tabela + '/' + pk;
        return this.httpClient.delete(target);
    }
}