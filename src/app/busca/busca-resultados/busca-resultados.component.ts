import { Component, OnInit } from '@angular/core';
import { Palavra } from 'src/app/models/Palavra';
import { Router } from '@angular/router';
import { PalavraService } from 'src/app/services/palavra.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-busca-resultados',
  templateUrl: './busca-resultados.component.html',
  styleUrls: ['./busca-resultados.component.css']
})
export class BuscaResultadosComponent implements OnInit {
  resultados : Observable<Palavra[]>;
  idioma = 'es';

  constructor(private rotas : Router, private pSvc : PalavraService) {}

  ngOnInit() {
    this.resultados = this.pSvc.sPalavras.asObservable();
    
  }

  onClickElemento(lng : string, id: number, lema : string){
    this.rotas.navigate(['/',lng.toLowerCase(), id, lema]);
  }

}
