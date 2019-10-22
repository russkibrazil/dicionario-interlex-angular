import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MySqlConnectorService } from '../mysql/mysql.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {


  constructor(private router:Router, private banco:MySqlConnectorService) { }
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
}
