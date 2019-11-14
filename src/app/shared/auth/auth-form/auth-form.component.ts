import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  aForm : FormGroup;
  constructor(private router: Router, private authSvc : AuthService, private store: Store<fromApp.AppState> ) { }

  ngOnInit() {
    this.aForm = new FormGroup({
      'usuario' : new FormControl('null', Validators.required),
      'senha' : new FormControl('null', Validators.required)
    });
  }

  onSubmit(){
    const u = this.aForm.value['usuario'];
    const p = this.aForm.value['senha'];
   // this.authSvc.login();
    this.store.dispatch(new AuthActions.TrySignin({username: u, password: p}));
    //this.router.navigate(['m/edit']);
  }
  
}
