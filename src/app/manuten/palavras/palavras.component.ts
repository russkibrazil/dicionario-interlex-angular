import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Palavra } from 'src/app/models/Palavra';
import {  Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-palavras',
  templateUrl: './palavras.component.html',
  styleUrls: ['./palavras.component.css']
})
export class PalavrasComponent implements OnInit {
  
  palavraForm : FormGroup;
  generos = ['Masculino', 'Feminino', 'Neutro', 'Sem gênero', 'Masc/Fem'];
  classesGramaticais = ["Artigo",
  "Substantivo",
  "Adjetivo",
  "Advérbio",
  "Preposição",
  "Conjunção",
  "Interjeição",
  "Pronome",
  "Verbo",
  "Numeral",
  "Substantivo-Adjetivo"];
  idiomas = ['Português', 'Espanhol', 'Inglês'];
  palavraAtiva : Palavra;
  
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.palavraForm = new FormGroup({
      'lema' : new FormControl('null', Validators.required),
      'sublema' : new FormControl(),
      'idioma' : new FormControl('null', Validators.required),
      'classeGramatical' : new FormControl('null', Validators.required),
      'genero' : new FormControl('null', Validators.required),
      'definicao' : new FormControl(),
      'notasGramaticais' : new FormControl(),
      'notasCulturais' : new FormControl(),
      'sinonimos' : new FormGroup({
        'sinonimo1' : new FormControl(),
        'sinonimo2' : new FormControl()
      })
    });
  }
  //https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select
  //https://www.w3schools.com/html/html_form_elements.asp
  //https://www.positronx.io/angular-7-select-dropdown-examples-with-reactive-forms/
  //https://www.concretepage.com/angular/angular-select-option-reactive-form
  onSubmit(){

  }

  onClickEquivalentes(){
    this.router.navigate(['equivalencias'],{relativeTo: this.route});
  }
  onClickFraseologia(){
    this.router.navigate(['frase'],{relativeTo: this.route});
  }
  onClickConjugacoes(){
    this.router.navigate(['conjugacoes'],{relativeTo: this.route});
  }
  
  sideButtonClicked(evento:{tipo:string}){
    const ev = evento.tipo;
    switch (ev){
      case 'novo':
        if (this.palavraForm.dirty){
          this.palavraForm.value['palavra'] = '';
          this.palavraForm.value['telefone'] = '';
          this.palavraForm.value['email'] = '';
          this.palavraForm.value['nome'] = '';
          this.palavraForm.value['cpf'] = '';
          this.palavraForm.value['permissao'] = 'EDT';
          this.palavraForm.value['entrasenha'] = '';
        }
      break;
      case 'salvar':
        if (this.palavraForm.touched){
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
