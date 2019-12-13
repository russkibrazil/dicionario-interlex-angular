import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Palavra } from 'src/app/models/Palavra';
import {  Router, ActivatedRoute } from '@angular/router';
import { PalavraService } from 'src/app/services/palavra.service';

@Component({
  selector: 'app-palavras',
  templateUrl: './palavras.component.html',
  styleUrls: ['./palavras.component.css']
})
export class PalavrasComponent implements OnInit {
  
  private palavraForm : FormGroup;
  private generos = ['Masculino', 'Feminino', 'Neutro', 'Sem gênero', 'Masc/Fem'];
  private classesGramaticais = ["Artigo",
    "Substantivo",
    "Adjetivo",
    "Advérbio",
    "Preposição",
    "Conjunção",
    "Interjeição",
    "Pronome",
    "Verbo",
    "Numeral",
    "Substantivo-Adjetivo"
  ];
  private idiomas = ['Português', 'Espanhol', 'Inglês'];
  private palavraAtiva : Palavra;
  private bancoPalavras : Palavra[];
  private estadoNovo = true;
  private pos : number;
  
  constructor(private router:Router, private route:ActivatedRoute, private pSvc : PalavraService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id !== undefined){
      const vct = this.pSvc.get();
      console.log(vct);
      this.palavraAtiva = vct.find(
        p => p.Id === (+id)
      );
      this.palavraForm = new FormGroup({
        'lema' : new FormControl(this.palavraAtiva.Lema, Validators.required),
        'sublema' : new FormControl(),
        'idioma' : new FormControl(this.palavraAtiva.Idioma, Validators.required),
        'classeGramatical' : new FormControl(this.palavraAtiva.ClasseGram, Validators.required),
        'genero' : new FormControl(this.palavraAtiva.Genero, Validators.required),
        'definicao' : new FormControl(this.palavraAtiva.Definicao),
        'notasGramaticais' : new FormControl(this.palavraAtiva.notas_gramatica),
        'notasCulturais' : new FormControl(this.palavraAtiva.notas_cultura),
        'sinonimos' : new FormGroup({
          'sinonimo1' : new FormControl(),
          'sinonimo2' : new FormControl()
        })
      });
    }else{
      this.palavraForm = new FormGroup({
        'lema' : new FormControl('', Validators.required),
        'sublema' : new FormControl(),
        'idioma' : new FormControl('', Validators.required),
        'classeGramatical' : new FormControl('', Validators.required),
        'genero' : new FormControl('', Validators.required),
        'definicao' : new FormControl(),
        'notasGramaticais' : new FormControl(),
        'notasCulturais' : new FormControl(),
        'sinonimos' : new FormGroup({
          'sinonimo1' : new FormControl(),
          'sinonimo2' : new FormControl()
        })
      });
    }
  }
  //https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select
  //https://www.w3schools.com/html/html_form_elements.asp
  //https://www.positronx.io/angular-7-select-dropdown-examples-with-reactive-forms/
  //https://www.concretepage.com/angular/angular-select-option-reactive-form
  onSubmit(){

  }        

  onClickEquivalentes(){
    this.pSvc.setPalavraAtiva(this.palavraAtiva);
    this.router.navigate(['equivalencias'],{relativeTo: this.route});
  }
  onClickFraseologia(){
    this.pSvc.setPalavraAtiva(this.palavraAtiva);
    this.router.navigate(['frase'],{relativeTo: this.route});
  }
  onClickConjugacoes(){
    this.pSvc.setPalavraAtiva(this.palavraAtiva);
    this.router.navigate(['conjugacoes'],{relativeTo: this.route});
  }
  
  sideButtonClicked(evento:{tipo:string}){
    const e = evento.tipo;
    switch (e){
      case 'novo':
        if (this.palavraForm.dirty){
          this.palavraForm.reset();
          this.estadoNovo = true;
        }
      break;
      case 'salvar':
        if (this.palavraForm.touched && this.palavraForm.valid){
          let novo = new Palavra(
            this.palavraAtiva.Id,
            this.palavraForm.value['lema'],
            this.palavraForm.value['classeGramatical'],
            this.palavraForm.value['idioma'],
            this.palavraForm.value['notasGramaticais'],
            this.palavraForm.value['notasCulturais'],
            this.palavraForm.value['genero'],
            this.palavraForm.value['definicao']
          );
          if (this.estadoNovo)
            this.pSvc.add(novo);
          else
            this.pSvc.update(novo, this.palavraAtiva);
          window.alert('Salvo!');
          this.estadoNovo = false;
          this.sideButtonClicked({tipo:'primeiro'});
        }
      break;
      case 'apagar':
        this.pSvc.delete(this.palavraAtiva);
        window.alert('Apagado!');
      break;
      case 'primeiro':
        this.pos = 0;
        this.palavraAtiva = this.bancoPalavras[this.pos];
      break;
      case 'anterior':
        if (this.pos > 0)
          this.pos--;
        this.palavraAtiva = this.bancoPalavras[this.pos];
      break;
      case 'proximo':
        if (this.pos < this.bancoPalavras.length)
          this.pos--;
        this.palavraAtiva = this.bancoPalavras[this.pos];
      break;
      case 'ultimo':
        this.pos = this.bancoPalavras.length - 1;
        this.palavraAtiva = this.bancoPalavras[this.pos];
      break;
      default:
        break;
    }
  }
}
