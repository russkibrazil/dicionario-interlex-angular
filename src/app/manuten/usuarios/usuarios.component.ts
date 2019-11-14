import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarioForm : FormGroup;
  permissoes = ['Administrador', 'Editor', 'Usuário'];

  constructor() { }

  ngOnInit() {
    this.usuarioForm = new FormGroup({
      'usuario' : new FormControl('null', Validators.required),
      'telefone' : new FormControl('', Validators.pattern(/^[1-9][0-9][2-9][0-9]{7,8}$/)),
      'email' : new FormControl('null', Validators.email),
      'nome' : new FormControl('null', Validators.required),
      'cpf' : new FormControl('null', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
      'permissao' : new FormControl('EDT', Validators.required),
      'senha' : new FormGroup({
        'entrasenha' : new FormControl('null', Validators.required)
      })
    });
  }

  onSubmit(){}

  sideButtonClicked(evento:{tipo:string}){
    const ev = evento.tipo;
    switch (ev){
      case 'novo':
        if (this.usuarioForm.dirty){
          this.usuarioForm.value['usuario'] = '';
          this.usuarioForm.value['telefone'] = '';
          this.usuarioForm.value['email'] = '';
          this.usuarioForm.value['nome'] = '';
          this.usuarioForm.value['cpf'] = '';
          this.usuarioForm.value['permissao'] = 'EDT';
          this.usuarioForm.value['entrasenha'] = '';
        }
      break;
      case 'salvar':
        if (this.usuarioForm.touched){
          console.log('salvar');
        }
      break;
      case 'apagar':
        console.log('apagar');
      break;
      case 'primeiro':
        console.log('primeiro');
      break;
      case 'anterior':
        console.log('anterior');
      break;
      case 'proximo':
        console.log('proximo');
      break;
      case 'ultimo':
        console.log('ultimo');
      break;
      default:
        break;
    }
  }
}
