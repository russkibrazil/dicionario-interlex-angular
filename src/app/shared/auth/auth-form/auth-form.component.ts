import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  aForm : FormGroup;
  constructor(private router: Router, private authSvc : AuthService) { }

  ngOnInit() {
    this.aForm = new FormGroup({
      'usuario' : new FormControl('', Validators.required),
      'senha' : new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    const u = this.aForm.value['usuario'];
    const p = this.aForm.value['senha'];
    if (this.authSvc.tryLogin(u, p))
      ///FIXME: Não navega
      this.router.navigate(['m/edit']);
    else
      console.log('non valid config');
  }
  
}
