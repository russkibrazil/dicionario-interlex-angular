import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  private usuarioForm : FormGroup;
  private permissoes = ['Administrador', 'Editor', 'Usuário'];
  private usuario : Usuario;
  private estadoNovo = true;

  constructor(private uSvc : UsuarioService) { }

  ngOnInit() {
    this.usuarioForm = new FormGroup({
      'usuario' : new FormControl('', Validators.required),
      'telefone' : new FormControl('', Validators.pattern(/^[1-9]{2}[2-9][0-9]{7,8}$/)),
      'email' : new FormControl('', Validators.email),
      'nome' : new FormControl('', Validators.required),
      'cpf' : new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
      'permissao' : new FormControl('EDT', Validators.required),
      'senha' : new FormGroup({
        'entrasenha' : new FormControl('', Validators.required)
      })
    });
  }

  onSubmit(){}

  sideButtonClicked(evento:{tipo:string}){
    const ev = evento.tipo;
    switch (ev){
      case 'novo':
        if (this.usuarioForm.dirty){
          this.usuarioForm.reset();
          this.estadoNovo = true;
        }
      break;
      case 'salvar':
        if (this.usuarioForm.touched && this.usuarioForm.valid){
          let novo = new Usuario();
          novo.usr = this.usuarioForm.value['usuario'];
          novo.telefone = this.usuarioForm.value['telefone'];
          novo.email = this.usuarioForm.value['email'];
          novo.nome = this.usuarioForm.value['nome'];
          novo.cpf = this.usuarioForm.value['cpf'];
          novo.nivel_permissao = this.usuarioForm.value['permissao'];
          novo.pass = this.usuarioForm.value['entrasenha'];
          if (this.estadoNovo)
            this.uSvc.add(novo);
          else
            this.uSvc.update(novo, this.usuario);
          window.alert('Salvo!');
          this.estadoNovo = false;
          this.sideButtonClicked({tipo:'primeiro'});
        }
      break;
      case 'apagar':
        this.uSvc.delete(this.usuario);
        window.alert('Apagado!');
      break;
      /*case 'primeiro':
        this.pos = 0;
        this.palavraAtiva = this.bancoPalavras[this.pos];
      break;
      case 'anterior':
        if (this.pos > 0)
          this.pos--;
        this.palavraAtiva = this.bancoPalavras[this.pos];
      break;
      case 'proximo':
        if (this.pos < this.bancoPalavras.length)
          this.pos--;
        this.palavraAtiva = this.bancoPalavras[this.pos];
      break;
      case 'ultimo':
        this.pos = this.bancoPalavras.length - 1;
        this.palavraAtiva = this.bancoPalavras[this.pos];
      break;*/
      default:
        break;
    }
  }
}
