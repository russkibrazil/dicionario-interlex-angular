import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {LOGOUT} from '../auth/store/auth.actions'

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
  authState :Observable<{auth:boolean, level:string}>

  constructor(private router:Router, private store : Store<{auth: {auth:boolean, level: string}}>) {
    this.authState = this.store.pipe(select('auth'));
  }
  ngOnInit() {
  }
  onClickPalavras(){
    this.router.navigate(['m/edit']);
  }
  onClickHome(){}
  onClickBuscar(){
    this.router.navigate(['b']);
  }
  onClickUsuarios(){
    this.router.navigate(['m/usuarios']);
  }
  onClickReferencias(){
    this.router.navigate(['m/referencias']);
  }
  onClickEntrar(){
    this.router.navigate(['login']);
  }
  onClickLogout(){
    this.store.dispatch(LOGOUT());
    this.router.navigate(['b']);
  }
}
