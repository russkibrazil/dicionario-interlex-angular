import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EquivalenteService } from 'src/app/services/equivalente.service';
import { Palavra } from 'src/app/models/Palavra';
import { Equivalente } from 'src/app/models/Equivalente';
import { ActivatedRoute } from '@angular/router';
import { GeradorFiltro } from 'src/app/shared/mysql/geradorFiltro';

@Component({
  selector: 'app-equivalente',
  templateUrl: './equivalente.component.html',
  styleUrls: ['./equivalente.component.css']
})
export class EquivalenteComponent implements OnInit {

  equivalenteForm : FormGroup;
  private pA : Palavra;
  private equivalenteAtivo : Equivalente;
  private bancoEquivalentes : Equivalente[] = [];
  private estadoNovo = true;
  private pos : number = 0;

  constructor(private eSvc : EquivalenteService, private actRoute : ActivatedRoute) {
    this.equivalenteForm = new FormGroup({
      'lemaEquivalente' : new FormControl('', Validators.required),
      'numOrdemApresentacao' : new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'heterogenerico' : new FormControl(),
        'heterotonico' : new FormControl(),
        'heterossemantico' : new FormControl(),
      'exemploOriginal' : new FormControl(''),
      'exemploEquivalente' : new FormControl(''),
      'palavraGuia' : new FormControl(''),
      'referencia' : new FormControl(''),
      'notasGramatica' : new FormControl(),
      'notasCultura' : new FormControl()
    });
   }

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.eSvc.fetch([GeradorFiltro.filtroAnd(true) + GeradorFiltro.igual('Origem', (+id))]);
    this.eSvc.sEquivalentes.subscribe(
      els => {
        this.bancoEquivalentes = els;
        if (this.bancoEquivalentes.length > 0){
          this.equivalenteAtivo = this.bancoEquivalentes[this.pos];
          this.equivalenteForm.patchValue({'lemaEquivalente' : this.equivalenteAtivo.equivalente});
          this.equivalenteForm.patchValue({'numOrdemApresentacao' : this.equivalenteAtivo.nApresentacao});
          this.equivalenteForm.patchValue({'exemploOriginal' : this.equivalenteAtivo.Exemplo});
          this.equivalenteForm.patchValue({'exemploEquivalente' : this.equivalenteAtivo.Exemplo_Traduzido});
          this.equivalenteForm.patchValue({'palavraGuia' : this.equivalenteAtivo.PGuia});
          this.equivalenteForm.patchValue({'referencia' : this.equivalenteAtivo.Referencia});
        }
      }
    );
  }

  onSubmit(){}

  sideButtonClicked(evento:{tipo:string}){
    const ev = evento.tipo;
    switch (ev){
      case 'novo':
        if (this.equivalenteForm.dirty){
          this.equivalenteForm.reset();
          this.estadoNovo = true;
        }
      break;
      case 'salvar':
        if (this.equivalenteForm.touched && this.equivalenteForm.valid){
          let novo = new Equivalente(
            this.pA.Id,
            this.equivalenteForm.value['lemaEquivalente'],
            this.equivalenteForm.value['exemploOriginal'],
            this.equivalenteForm.value['exemploEquivalente'],
            this.equivalenteForm.value['referencia'],
            this.equivalenteForm.value['palavraGuia'],
            this.equivalenteForm.value['nOrdemApresentacao']
          );
          if (this.estadoNovo)
            this.eSvc.add(novo);
          else
            this.eSvc.update(novo, this.equivalenteAtivo);
          window.alert('Salvo!');
          this.estadoNovo = false;
          this.sideButtonClicked({tipo:'primeiro'});
        }
      break;
      case 'apagar':
        this.eSvc.delete(this.equivalenteAtivo);
        window.alert('Apagado!');
      break;
      case 'primeiro':
        this.pos = 0;
        this.equivalenteAtivo = this.bancoEquivalentes[this.pos];
      break;
      case 'anterior':
        if (this.pos > 0)
          this.pos--;
        this.equivalenteAtivo = this.bancoEquivalentes[this.pos];
      break;
      case 'proximo':
        if (this.pos < this.bancoEquivalentes.length)
          this.pos--;
        this.equivalenteAtivo = this.bancoEquivalentes[this.pos];
      break;
      case 'ultimo':
        this.pos = this.bancoEquivalentes.length - 1;
        this.equivalenteAtivo = this.bancoEquivalentes[this.pos];
      break;
      default:
        break;
    }
  }

}
