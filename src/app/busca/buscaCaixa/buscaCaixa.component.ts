import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { GeradorFiltro } from 'src/app/shared/mysql/geradorFiltro';
import { PalavraService } from 'src/app/services/palavra.service';

@Component({
  selector: 'app-busca-caixa',
  templateUrl: './buscaCaixa.component.html',
  styleUrls: ['./buscaCaixa.component.css']
})
export class BuscaCaixaComponent implements OnInit {
  @ViewChild('frmBusca', {static: true}) formBusca: NgForm;
  
  constructor(private pSvc : PalavraService){}

  onBuscar(){
    const chavePesquisa = this.formBusca.value.txtbusca;
    this.pSvc.fetch(['filter=' + GeradorFiltro.stringContem('Lema',chavePesquisa)]);
  }
  
  ngOnInit() {
  }

}
