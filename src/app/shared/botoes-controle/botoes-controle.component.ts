import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botoes-controle',
  templateUrl: './botoes-controle.component.html',
  styleUrls: ['./botoes-controle.component.css']
})
export class BotoesControleComponent implements OnInit {
  @Output() buttonEvent = new EventEmitter<{tipo:string}>();
  constructor() { }

  ngOnInit() {
  }
//utilizar subjects ou algo do tipo para fazer lançamento de evento quando o botão for clicado
  onClickNovo(){
    this.buttonEvent.emit({tipo:'novo'});
  }
  onClickSalvar(){
    this.buttonEvent.emit({tipo:'salvar'});
  }
  onClickApagar(){
    this.buttonEvent.emit({tipo:'apagar'});
  }
  onClickPrimeiro(){
    this.buttonEvent.emit({tipo:'primeiro'});
  }
  onClickAnterior(){
    this.buttonEvent.emit({tipo:'anterior'});
  }
  onClickProximo(){
    this.buttonEvent.emit({tipo:'proximo'});
  }
  onClickUltimo(){
    this.buttonEvent.emit({tipo:'ultimo'});
  }

}
