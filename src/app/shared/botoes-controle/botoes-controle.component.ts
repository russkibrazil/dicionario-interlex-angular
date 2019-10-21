import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botoes-controle',
  templateUrl: './botoes-controle.component.html',
  styleUrls: ['./botoes-controle.component.css']
})
export class BotoesControleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickNovo(){}
  onClickSalvar(){}
  onClickApagar(){}
  onClickPrimeiro(){}
  onClickAnterior(){}
  onClickProximo(){}
  onClickUltimo(){}

}
