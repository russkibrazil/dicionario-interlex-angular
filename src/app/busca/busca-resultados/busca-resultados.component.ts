import { Component, OnInit } from '@angular/core';
import { Palavra } from 'src/app/models/Palavra';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca-resultados',
  templateUrl: './busca-resultados.component.html',
  styleUrls: ['./busca-resultados.component.css']
})
export class BuscaResultadosComponent implements OnInit {
  resultados :  Palavra[] = [new Palavra(1, 'sdasdasd', 'dsdasdas', 'dsadasdasda', 'asfdadfadfad', 'afdasfdasfdsf', 'asdfdafdsfs', 'asdfasfasdf'),
  new Palavra(2,'Minha palavra', 'classe', 'idioma', 'notag', 'notac', 'genero', 'definicao')];
  idioma : string = 'en';

  constructor(private rotas : Router) { }

  ngOnInit() {
  }

  onClickElemento(lng : string, id: number, lema : string){
    this.rotas.navigate(['/',lng, id, lema]);
  }

}
