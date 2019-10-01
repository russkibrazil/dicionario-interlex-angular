import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-palavra-guia',
  templateUrl: './palavra-guia.component.html',
  styleUrls: ['./palavra-guia.component.css']
})
export class PalavraGuiaComponent implements OnInit {

  editForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'common': new FormGroup({
        'lema': new FormControl(null, [Validators.required]),
      })
    })
  }

}
