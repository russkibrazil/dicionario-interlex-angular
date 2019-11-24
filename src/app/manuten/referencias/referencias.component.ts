import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReferenciaService } from 'src/app/services/referencia.service';
import { Referencia } from 'src/app/models/Referencia';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit {

  referenciasForm : FormGroup;
  private referenciaAtiva : Referencia;
  private bancoReferencias : Referencia[];
  private estadoNovo = true;
  private pos : number;

  constructor(private rSvc : ReferenciaService) { }

  ngOnInit() {
    this.referenciasForm = new FormGroup({
      'codigo' : new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{2,3}[0-9]{2}[a-z]?$/)]),
      'autor' : new FormControl('null', Validators.required),
      'descricao' : new FormControl(),
      'ano' : new FormControl('', [Validators.required, Validators.pattern(/^[1-2][0-9]{3}$/)])
    })
  }

  onSubmit(){}
  sideButtonClicked(evento:{tipo:string}){
    const ev = evento.tipo;
    switch (ev){
      case 'novo':
        if (this.referenciasForm.dirty){
          this.referenciasForm.reset();
          this.estadoNovo = true;
        }
      break;
      case 'salvar':
        if (this.referenciasForm.touched && this.referenciasForm.valid){
          let novo = new Referencia(
            this.referenciaAtiva.Id,
            this.referenciasForm.value['codigo'],
            this.referenciasForm.value['autor'],
            this.referenciasForm.value['descricao'],
            this.referenciasForm.value['ano']
          );
          if (this.estadoNovo)
            this.rSvc.add(novo);
          else
            this.rSvc.update(novo, this.referenciaAtiva);
          window.alert('Salvo!');
          this.estadoNovo = false;
          this.sideButtonClicked({tipo:'primeiro'});
        }
      break;
      case 'apagar':
        this.rSvc.delete(this.referenciaAtiva);
        window.alert('Apagado!');
      break;
      case 'primeiro':
        this.pos = 0;
        this.referenciaAtiva = this.bancoReferencias[this.pos];
      break;
      case 'anterior':
        if (this.pos > 0)
          this.pos--;
        this.referenciaAtiva = this.bancoReferencias[this.pos];
      break;
      case 'proximo':
        if (this.pos < this.bancoReferencias.length)
          this.pos--;
        this.referenciaAtiva = this.bancoReferencias[this.pos];
      break;
      case 'ultimo':
        this.pos = this.bancoReferencias.length - 1;
        this.referenciaAtiva = this.bancoReferencias[this.pos];
      break;
      default:
        break;
    }
  }
}
