//https://www.techiediaries.com/php-angular-crud-api-httpclient-forms/

//https://www.codexworld.com/angularjs-crud-operations-php-mysql/
//https://phpenthusiast.com/blog/angular-php-app-creating-new-item-with-httpclient-post
//https://stackoverflow.com/questions/15485354/angularjs-http-post-to-php-and-undefined
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MysqlBasePackage } from './mysql-BasePackage';
import { Palavra } from 'src/app/models/Palavra';

@Injectable({providedIn: 'root'})
export class MySqlConnectorService {
    private readonly baseUrl = 'http://localhost/shared/mysql/mysql-php';
    
    constructor(private httpClient: HttpClient) { }
    
    readOperation(pacote : MysqlBasePackage) : Observable<Palavra[]>{
        let palavra : Palavra[];
        return this.httpClient.post(`${this.baseUrl}/read`, {data: pacote})
            .pipe(map((res) => {
                palavra.push(res['data']);
                return palavra;
            }));
    }
}