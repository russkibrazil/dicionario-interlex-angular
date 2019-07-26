import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-busca-caixa',
  templateUrl: './buscaCaixa.component.html',
  styleUrls: ['./buscaCaixa.component.css']
})
export class BuscaCaixaComponent implements OnInit {
  @ViewChild('frmBusca', {static: true}) formBusca: NgForm;

  constructor(private rt: ActivatedRoute, private rts: Router){}

  onBuscar(){
    const chavePesquisa = this.formBusca.value.txtbusca;
  }
  ngOnInit() {
  }

}
