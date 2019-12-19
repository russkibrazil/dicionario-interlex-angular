import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fraseologia } from 'src/app/models/Fraseologia';
import { FraseologiaService } from 'src/app/services/fraseologia.service';
import { PalavraService } from 'src/app/services/palavra.service';
import { Palavra } from 'src/app/models/Palavra';
import { ActivatedRoute } from '@angular/router';
import { GeradorFiltro } from 'src/app/shared/mysql/geradorFiltro';

@Component({
  selector: 'app-fraseologia',
  templateUrl: './fraseologia.component.html',
  styleUrls: ['./fraseologia.component.css']
})
export class FraseologiaComponent implements OnInit {
  private fraseForm : FormGroup;
  private bancoFrases:Fraseologia[] = [];
  private fraseAtiva:Fraseologia;
  private tipos = ['Uso comum', 'Expressão idiomática'];
  private pos :number = 0;
  private estadoNovo = true;

  constructor(private fSvc : FraseologiaService, private pSvc : PalavraService, private actRoute : ActivatedRoute) {
    this.fraseForm = new FormGroup({
      'fraseOriginal' : new FormControl('', [Validators.required]),
      'fraseEquivalente' :  new FormControl('', [Validators.required]),
      'exemploForiginal' : new FormControl('', Validators.required),
      'exemploFequivalente' : new FormControl('', Validators.required),
      'notasGramaticais' : new FormControl(),
      'notasCulturais' : new FormControl(),
      'tipos' : new FormControl()
    });
   }

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.fSvc.fetch([GeradorFiltro.filtroAnd(true) + GeradorFiltro.igual('idPalavra', (+id))]);
    this.fSvc.sFraseologia.subscribe(
      els => {
        this.bancoFrases = els;
        if (this.bancoFrases.length > 0){
          this.fraseAtiva = this.bancoFrases[this.pos];
          this.fraseForm.patchValue({'fraseOriginal' : this.fraseAtiva.fraseOrig});
          this.fraseForm.patchValue({'fraseEquivalente' : this.fraseAtiva.fraseEquiv});
          this.fraseForm.patchValue({'exemploForiginal' : this.fraseAtiva.exemploOriginal});
          this.fraseForm.patchValue({'exemploFequivalente' : this.fraseAtiva.exemploEquivalente});
          this.fraseForm.patchValue({'notasGramaticais' : this.fraseAtiva.notasGramatica});
          this.fraseForm.patchValue({'notasCulturais' : this.fraseAtiva.notasCultura});
          this.fraseForm.patchValue({'tipos' : this.fraseAtiva.categoria});
        }
      }
    )
  }

  onSubmit(){
    
  }

  sideButtonClicked(evento:{tipo:string}){
    const ev = evento.tipo;
    switch (ev){
      case 'novo':
        if (this.fraseForm.dirty){
          this.fraseForm.reset();
          this.estadoNovo = true;
        }
      break;
      case 'salvar':
        if (this.fraseForm.touched && this.fraseForm.valid){
          let novo  = new Fraseologia(1,
            this.fraseForm.value['fraseOriginal'],
            this.fraseForm.value['fraseEquivalente'],
            this.fraseForm.value['exemploFOriginal'],
            this.fraseForm.value['exemploFEquivalente'],
            this.fraseForm.value['notasGramaticais'],
            this.fraseForm.value['notasCulturais'],
            'c'
          );
          if (this.estadoNovo){
            this.fSvc.add(novo);
            this.estadoNovo = false;
          }
          else
            this.fSvc.update(novo, this.fraseAtiva);
          window.alert('Salvo!');
          this.sideButtonClicked({tipo:'primeiro'});
        }
      break;
      case 'apagar':
        this.fSvc.delete(this.fraseAtiva);
        window.alert('Apagado!');
      break;
      case 'primeiro':
        this.pos = 0;
        this.fraseAtiva = this.bancoFrases[this.pos];
      break;
      case 'anterior':
        if (this.pos > 0)
          this.pos--;
        this.fraseAtiva = this.bancoFrases[this.pos];
      break;
      case 'proximo':
        if (this.pos < this.bancoFrases.length)
          this.pos--;
        this.fraseAtiva = this.bancoFrases[this.pos];
      break;
      case 'ultimo':
        this.pos = this.bancoFrases.length - 1;
        this.fraseAtiva = this.bancoFrases[this.pos];
      break;
      default:
        break;
    }
  }

}
