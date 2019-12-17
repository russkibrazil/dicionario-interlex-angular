import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { ReferenciaService } from 'src/app/services/referencia.service';
import { GeradorFiltro } from 'src/app/shared/mysql/geradorFiltro';
import {switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-busca-generica',
  templateUrl: './busca-generica.component.html',
  styleUrls: ['./busca-generica.component.css']
})
export class BuscaGenericaComponent implements OnInit {

  tabela :string;
  buscaForm : FormGroup;
  obsvTabela;

  constructor(private actRoute : ActivatedRoute, private uSvc:UsuarioService, private rSvc :ReferenciaService) { }

  ngOnInit() {
    this.tabela = this.actRoute.snapshot.queryParamMap.get('tabela');
    this.buscaForm = new FormGroup({
      'busca' : new FormControl('', Validators.required)
    });
  }
  onSubmit(){
    const valor = this.buscaForm.value['busca'];
    //const numero = !Number.isNaN(Number.parseInt(valor));
    switch(this.tabela){
      case 'usr':
        this.uSvc.fetch([GeradorFiltro.filtroOr(1) + GeradorFiltro.stringContem('nome', valor),
      GeradorFiltro.filtroOr(2) + GeradorFiltro.igual('cpf', valor),
      GeradorFiltro.filtroOr(3) + GeradorFiltro.stringContem('usr', valor)]);
        this.obsvTabela = this.uSvc.sUsuarios.asObservable();
        break;
      case 'referencias':
        this.rSvc.fetch([GeradorFiltro.filtroOr(1) + GeradorFiltro.stringContem('Descricao', valor),
        GeradorFiltro.filtroOr(2) + GeradorFiltro.stringContem('Cod', valor),
        GeradorFiltro.filtroOr(3) + GeradorFiltro.stringContem('Autor', valor)]);
        this.obsvTabela = this.rSvc.sReferencias.asObservable();
        break;
      default:
        throw "Erro ao detectar palavra";
    }
  }
}
