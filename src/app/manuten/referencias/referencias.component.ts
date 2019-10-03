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

}
