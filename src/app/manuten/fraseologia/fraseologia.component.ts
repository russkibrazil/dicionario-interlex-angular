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
      'fraseOriginal' : new FormControl(null, [Validators.required]),
      'fraseEquvalente' :  new FormControl('null', [Validators.required]),
      'exemploForiginal' : new FormControl('null', Validators.required),
      'exemploFequivalente' : new FormControl('null', Validators.required),
      'notasGramaticais' : new FormControl('null'),
      'notasCulturais' : new FormControl('null')
    });
  }

  onSubmit(){
    
  }

}
