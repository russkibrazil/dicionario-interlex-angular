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

}
