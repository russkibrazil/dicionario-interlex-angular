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
  private estadoNovo = true;
  
  constructor(private router:Router, private route:ActivatedRoute, private pSvc : PalavraService) {
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

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null){
      const vct = this.pSvc.get();
      this.palavraAtiva = vct.find(
        p => p.Id === (+id)
      );
      this.palavraForm.patchValue({'lema' : this.palavraAtiva.Lema});
      this.palavraForm.patchValue({'idioma' : this.palavraAtiva.Idioma});
      this.palavraForm.patchValue({'classGramatical' : this.palavraAtiva.ClasseGram});
      this.palavraForm.patchValue({'genero' : this.palavraAtiva.Genero});
      this.palavraForm.patchValue({'definicao' : this.palavraAtiva.Definicao});
      this.palavraForm.patchValue({'notasGramaticais' : this.palavraAtiva.notas_gramatica});
      this.palavraForm.patchValue({'notasCulturais' : this.palavraAtiva.notas_cultura});
    }
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
            0,
            this.palavraForm.value['lema'],
            this.palavraForm.value['classeGramatical'],
            this.palavraForm.value['idioma'],
            this.palavraForm.value['notasGramaticais'],
            this.palavraForm.value['notasCulturais'],
            this.palavraForm.value['genero'],
            this.palavraForm.value['definicao']
          );
          if (this.estadoNovo){
            //novo.Id = null;
            this.pSvc.add(novo);
          }
          else{
            novo.Id = this.palavraAtiva.Id;
            this.pSvc.update(novo, this.palavraAtiva);
          }
          this.estadoNovo = false;
          this.palavraAtiva = novo;
          window.alert('Salvo!');
        }
      break;
      case 'apagar':
        this.pSvc.delete(this.palavraAtiva);
        this.palavraAtiva = undefined;
        window.alert('Apagado!');
        this.palavraForm.reset();
      break;
      default:
        break;
    }
  }
}
