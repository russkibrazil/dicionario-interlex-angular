import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-resultados',
  templateUrl: './busca-resultados.component.html',
  styleUrls: ['./busca-resultados.component.css']
})
export class BuscaResultadosComponent implements OnInit {
  resultados = null;
  constructor() { }

  ngOnInit() {
  }

}
