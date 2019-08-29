//https://www.techiediaries.com/php-angular-crud-api-httpclient-forms/

//https://www.codexworld.com/angularjs-crud-operations-php-mysql/
//https://phpenthusiast.com/blog/angular-php-app-creating-new-item-with-httpclient-post
//https://stackoverflow.com/questions/15485354/angularjs-http-post-to-php-and-undefined


/*
    Problemas no CORS
    https://www.hiago.me/2018/09/08/ionic-angular-fazendo-o-cors-seu-amigo/
    https://www.techiediaries.com/angular-httpclient/
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MysqlBasePackage } from './mysql-BasePackage';
import { Palavra } from 'src/app/models/Palavra';

@Injectable({providedIn: 'root'})
export class MySqlConnectorService {
    private readonly baseUrl = 'http://localhost/shared/mysql/';
    
    constructor(private httpClient: HttpClient) { }
    
    readOperation(pacote : MysqlBasePackage) : Observable<Palavra[]>{
        let palavra : Palavra[];
        
        return this.httpClient.post(`${this.baseUrl}`, {data: pacote})
            .pipe(map((res) => {
                palavra.push(res['data']);
                return palavra;
            }));

    }
}