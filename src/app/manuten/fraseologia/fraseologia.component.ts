import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fraseologia',
  templateUrl: './fraseologia.component.html',
  styleUrls: ['./fraseologia.component.css']
})
export class FraseologiaComponent implements OnInit {
  fraseForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.fraseForm = new FormGroup({
      'fraseOriginal' : new FormControl('null', [Validators.required]),
      'fraseEquvalente' :  new FormControl('null', [Validators.required]),
      'exemploForiginal' : new FormControl('null', Validators.required),
      'exemploFequivalente' : new FormControl('null', Validators.required),
      'notasGramaticais' : new FormControl('null'),
      'notasCulturais' : new FormControl('null')
    });
  }

  onSubmit(){
    
  }

  sideButtonClicked(evento:{tipo:string}){
    const ev = evento.tipo;
    switch (ev){
      case 'novo':
        if (this.fraseForm.dirty){
          this.fraseForm.value['frase'] = '';
          this.fraseForm.value['telefone'] = '';
          this.fraseForm.value['email'] = '';
          this.fraseForm.value['nome'] = '';
          this.fraseForm.value['cpf'] = '';
          this.fraseForm.value['permissao'] = 'EDT';
          this.fraseForm.value['entrasenha'] = '';
        }
      break;
      case 'salvar':
        if (this.fraseForm.touched){
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
