import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';
import { Observable } from 'rxjs';
import * as fromIndex from '../../store/index';
import { GeradorFiltro } from '../../mysql/geradorFiltro';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  
  aForm : FormGroup;
  auth$: Observable<{auth: boolean, level:string}>;

  constructor( private store: Store<{auth: {auth: boolean, level:string}}> ) {
    this.auth$ = store.pipe(select('auth'));
   }

  ngOnInit() {
    this.aForm = new FormGroup({
      'usuario' : new FormControl('', Validators.required),
      'senha' : new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    const u = this.aForm.value['usuario'];
    const p = this.aForm.value['senha'];
    this.store.dispatch(AuthActions.TRY_SIGNIN({username: u, password: p}));
  }
  
}
