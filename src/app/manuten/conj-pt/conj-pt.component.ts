import { Component, OnInit } from '@angular/core';
import { ConjugacaoPtService } from 'src/app/services/conjugacaoPt.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConjugacaoPt } from 'src/app/models/ConjugacaoPt';
import { GeradorFiltro } from 'src/app/shared/mysql/geradorFiltro';

@Component({
  selector: 'app-conj-pt',
  templateUrl: './conj-pt.component.html',
  styleUrls: ['./conj-pt.component.css']
})
export class ConjPtComponent implements OnInit {

  conjForm : FormGroup;
  conjugacao = new ConjugacaoPt();
  id : number;

  constructor(private cSvc : ConjugacaoPtService, private actRoute : ActivatedRoute) { 
    this.conjForm = new FormGroup({
      'cPresente' : new FormControl(),
      'ePresente' : new FormControl(),
      'cPretImp' : new FormControl(),
      'ePretImp' : new FormControl(),
      'cPretPer' : new FormControl(),
      'ePretPer' : new FormControl(),
      'cFutPres' : new FormControl(),
      'eFutPres' : new FormControl(),
      'cFutPret' : new FormControl(),
      'eFutPret' : new FormControl(),
      'cInfPessoal' : new FormControl(),
      'eInfPessoal' : new FormControl(),
      'cParticipio' : new FormControl(),
      'eParticipio' : new FormControl(),
      'cGerundio' : new FormControl(),
      'eGerundio' : new FormControl()
    })
  }

  ngOnInit() {
    this.id = Number.parseInt(this.actRoute.snapshot.paramMap.get('id'));
    this.cSvc.fetch([GeradorFiltro.filtroAnd(true) + GeradorFiltro.igual('id', this.id)]);
    this.cSvc.sCPt.subscribe(
      el => {
        const vct = el;
        if (vct.length > 0){
          this.conjugacao = vct[0];
          this.conjForm.patchValue({'cPresente' : this.conjugacao.constrPresente});
          this.conjForm.patchValue({'ePresente' : this.conjugacao.exPresente});
          this.conjForm.patchValue({'cPretImp' : this.conjugacao.constrPretImp});
          this.conjForm.patchValue({'ePretImp' : this.conjugacao.exPretImp});
          this.conjForm.patchValue({'cPretPer' : this.conjugacao.constrPretPer});
          this.conjForm.patchValue({'ePretPer' : this.conjugacao.exPretPer});
          this.conjForm.patchValue({'cFutPres' : this.conjugacao.constrFutPres});
          this.conjForm.patchValue({'eFutPres' : this.conjugacao.exFutPres});
          this.conjForm.patchValue({'cFutPret' : this.conjugacao.constrFutPret});
          this.conjForm.patchValue({'eFutPret' : this.conjugacao.exFutPret});
          this.conjForm.patchValue({'cInfPessoal' : this.conjugacao.constrInfPessoal});
          this.conjForm.patchValue({'eInfPessoal' : this.conjugacao.exInfPessoal});
          this.conjForm.patchValue({'cParticipio' : this.conjugacao.constrParticipio});
          this.conjForm.patchValue({'eParticipio' : this.conjugacao.exParticipio});
          this.conjForm.patchValue({'cGerundio' : this.conjugacao.constrGerundio});
          this.conjForm.patchValue({'eGerundio' : this.conjugacao.exGerundio});
        }
      }
    );
  }

  onSubmit(){}

  sideButtonClicked(evento:{tipo:string}){
    const ev = evento.tipo;
    switch (ev){
      case 'salvar':
        if (this.conjForm.touched && this.conjForm.valid){
          let novo = new ConjugacaoPt();
          novo.id = this.conjugacao.id;
          novo.constrPresente = this.conjForm.value['cPresente'];
          novo.exPresente = this.conjForm.value['ePresente'];
          novo.constrPretImp = this.conjForm.value['cPretImp'];
          novo.exPretImp = this.conjForm.value['ePretImp'];
          novo.constrPretPer = this.conjForm.value['cPretPer'];
          novo.exPretPer = this.conjForm.value['ePretPer'];
          novo.constrFutPres = this.conjForm.value['cFutPres'];
          novo.exFutPres = this.conjForm.value['eFutPres'];
          novo.constrFutPret = this.conjForm.value['cFutPret'];
          novo.exFutPret = this.conjForm.value['eFutPret'];
          novo.constrInfPessoal = this.conjForm.value['cInfPessoal'];
          novo.exInfPessoal = this.conjForm.value['eInfPessoal'];
          novo.constrParticipio = this.conjForm.value['cParticipio'];
          novo.exParticipio = this.conjForm.value['eParticipio'];
          novo.constrGerundio = this.conjForm.value['cGerundio'];
          novo.exGerundio = this.conjForm.value['eGerundio'];
          this.cSvc.update(novo, this.conjugacao);
          window.alert('Salvo!');
          this.sideButtonClicked({tipo:'primeiro'});
        }
      break;
      default:
        break;
    }
  }

}
