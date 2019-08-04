import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {MysqlBasePackage} from '../../shared/mysql/mysql-BasePackage';
import { MySqlConnectorService } from 'src/app/shared/mysql/mysql.service';
import { Palavra } from 'src/app/models/Palavra';

@Component({
  selector: 'app-busca-caixa',
  templateUrl: './buscaCaixa.component.html',
  styleUrls: ['./buscaCaixa.component.css']
})
export class BuscaCaixaComponent implements OnInit {
  @ViewChild('frmBusca', {static: true}) formBusca: NgForm;
  resultados :  Palavra[];
  
  constructor(private rt: ActivatedRoute, private rts: Router, private mysqlMgr :  MySqlConnectorService){}

  onBuscar(){
    const chavePesquisa = this.formBusca.value.txtbusca;
    let pesquisa = new MysqlBasePackage('palavra', 'SELECT * FROM palavra WHERE lema LIKE \'' + chavePesquisa + '\'');
    this.mysqlMgr.readOperation(pesquisa)
      .subscribe(
        (ret : Palavra[])=>{
          this.resultados = ret;
        }
      )
    ;
  }
  
  ngOnInit() {
  }

}
