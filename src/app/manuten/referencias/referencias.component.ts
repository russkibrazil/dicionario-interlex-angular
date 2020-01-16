import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReferenciaService } from 'src/app/services/referencia.service';
import { Referencia } from 'src/app/models/Referencia';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit {

  referenciasForm : FormGroup;
  private referenciaAtiva : Referencia;
  private estadoNovo = true;
  private pos : number;

  constructor(private rSvc : ReferenciaService, private route : ActivatedRoute, private router : Router) {
    this.referenciasForm = new FormGroup({
      'codigo' : new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{1,3}[0-9]{2}[a-z]?$/)]),
      'autor' : new FormControl('', Validators.required),
      'descricao' : new FormControl(),
      'ano' : new FormControl('', [Validators.required, Validators.pattern(/^[1-2][0-9]{3}$/)])
    });
  }

  ngOnInit() {
    const cod = this.route.snapshot.params['cod'];
    if (cod !== undefined && cod !== 'buscar'){
      const vct = this.rSvc.get();
      this.referenciaAtiva = vct.find(
        r => r.Cod === cod
      );
      this.referenciasForm.patchValue({'codigo' : this.referenciaAtiva.Cod});
      this.referenciasForm.patchValue({'autor': this.referenciaAtiva.Autor});
      this.referenciasForm.patchValue({'descricao' : this.referenciaAtiva.Descricao});
      this.referenciasForm.patchValue({'ano' : this.referenciaAtiva.Ano});
    }
  }

  onClickBuscar(){
      this.router.navigate(['../../buscar'], {relativeTo:this.route, queryParams: {tabela: 'referencias'}});
  }

  onSubmit(){}
  sideButtonClicked(evento:{tipo:string}){
    const ev = evento.tipo;
    switch (ev){
      case 'novo':
        if (this.referenciasForm.dirty){
          this.referenciasForm.reset();
          this.estadoNovo = true;
        }
      break;
      case 'salvar':
        if (this.referenciasForm.touched && this.referenciasForm.valid){
          let novo = new Referencia(
            this.referenciasForm.value['codigo'],
            this.referenciasForm.value['autor'],
            this.referenciasForm.value['descricao'],
            this.referenciasForm.value['ano']
          );
          if (this.estadoNovo)
            this.rSvc.add(novo);
          else
            this.rSvc.update(novo, this.referenciaAtiva);
          window.alert('Salvo!');
          this.estadoNovo = false;
          this.sideButtonClicked({tipo:'primeiro'});
        }
      break;
      case 'apagar':
        this.rSvc.delete(this.referenciaAtiva);
        window.alert('Apagado!');
      break;
      /*case 'primeiro':
        this.pos = 0;
        this.referenciaAtiva = this.bancoReferencias[this.pos];
      break;
      case 'anterior':
        if (this.pos > 0)
          this.pos--;
        this.referenciaAtiva = this.bancoReferencias[this.pos];
      break;
      case 'proximo':
        if (this.pos < this.bancoReferencias.length)
          this.pos--;
        this.referenciaAtiva = this.bancoReferencias[this.pos];
      break;
      case 'ultimo':
        this.pos = this.bancoReferencias.length - 1;
        this.referenciaAtiva = this.bancoReferencias[this.pos];
      break;*/
      default:
        break;
    }
  }
}
