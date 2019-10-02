import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-palavras',
  templateUrl: './palavras.component.html',
  styleUrls: ['./palavras.component.css']
})
export class PalavrasComponent implements OnInit {
  
  palavraForm : FormGroup;
  
  constructor() { }

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

}
