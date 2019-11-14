import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit {

  referenciasForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.referenciasForm = new FormGroup({
      'codigo' : new FormControl('null', [Validators.required, Validators.pattern(/^[A-Z]{2,3}[0-9]{2}[a-z]?$/)]),
      'autor' : new FormControl('null', Validators.required),
      'descricao' : new FormControl(),
      'ano' : new FormControl('null', [Validators.required, Validators.pattern(/^[1-2][0-9]{3}$/)])
    })
  }

  onSubmit(){}
  sideButtonClicked(evento:{tipo:string}){
    const ev = evento.tipo;
    switch (ev){
      case 'novo':
        if (this.referenciasForm.dirty){
          this.referenciasForm.value['referencias'] = '';
          this.referenciasForm.value['telefone'] = '';
          this.referenciasForm.value['email'] = '';
          this.referenciasForm.value['nome'] = '';
          this.referenciasForm.value['cpf'] = '';
          this.referenciasForm.value['permissao'] = 'EDT';
          this.referenciasForm.value['entrasenha'] = '';
        }
      break;
      case 'salvar':
        if (this.referenciasForm.touched){
          console.log('salvar');
        }
      break;
      case 'apagar':
        console.log('apagar');
      break;
      case 'primeiro':
        console.log('primeiro');
      break;
      case 'anterior':
        console.log('anterior');
      break;
      case 'proximo':
        console.log('proximo');
      break;
      case 'ultimo':
        console.log('ultimo');
      break;
      default:
        break;
    }
  }
}
