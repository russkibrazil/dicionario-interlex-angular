import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-equivalente',
  templateUrl: './equivalente.component.html',
  styleUrls: ['./equivalente.component.css']
})
export class EquivalenteComponent implements OnInit {

  equivalenteForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.equivalenteForm = new FormGroup({
      'lemaEquivalente' : new FormControl('null', Validators.required),
      'numOrdemApresentacao' : new FormControl('null', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'heteros' : new FormGroup({
        'heterogenerico' : new FormControl(),
        'heterotonico' : new FormControl(),
        'heterossemantico' : new FormControl()
      }),
      'exemploOriginal' : new FormControl(),
      'exemploEquivalente' : new FormControl(),
      'palavraGuia' : new FormControl(),
      'referencia' : new FormControl(),
      'notasGramatica' : new FormControl(),
      'notasCultura' : new FormControl()
    })
  }

  onSubmit(){}

  sideButtonClicked(evento:{tipo:string}){
    const ev = evento.tipo;
    switch (ev){
      case 'novo':
        if (this.equivalenteForm.dirty){
          this.equivalenteForm.value['equivalente'] = '';
          this.equivalenteForm.value['telefone'] = '';
          this.equivalenteForm.value['email'] = '';
          this.equivalenteForm.value['nome'] = '';
          this.equivalenteForm.value['cpf'] = '';
          this.equivalenteForm.value['permissao'] = 'EDT';
          this.equivalenteForm.value['entrasenha'] = '';
        }
      break;
      case 'salvar':
        if (this.equivalenteForm.touched){
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
