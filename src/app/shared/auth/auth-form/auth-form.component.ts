import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  aForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.aForm = new FormGroup({
      'usuario' : new FormControl('null', Validators.required),
      'senha' : new FormControl('null', Validators.required)
    });
  }

  onSubmit(){}

}
