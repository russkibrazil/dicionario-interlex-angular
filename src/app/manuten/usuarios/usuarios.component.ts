import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/Usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarioForm : FormGroup;
  private permissoes = ['Administrador', 'Editor', 'Usuário'];
  private usuario : Usuario;
  private estadoNovo = true;

  constructor(private uSvc : UsuarioService, private route : ActivatedRoute, private router : Router) {
    this.usuarioForm = new FormGroup({
      'usuario' : new FormControl('', Validators.required),
      'telefone' : new FormControl('', Validators.pattern(/^[1-9]{2}[2-9][0-9]{7,8}$/)),
      'email' : new FormControl('', Validators.email),
      'nome' : new FormControl('', Validators.required),
      'cpf' : new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
      'permissao' : new FormControl('Editor', Validators.required),
      'entrasenha' : new FormControl('', Validators.required),
      'confirmasenha' : new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    const usr = this.route.snapshot.paramMap.get('usr');
    if (usr !== null){
      const vct = this.uSvc.get();
      this.usuario = vct.find(
        u => u.usr === usr
      );
      this.usuarioForm.patchValue({'usuario': this.usuario.usr});
      this.usuarioForm.patchValue({'entrasenha' : this.usuario.pass});
      this.usuarioForm.patchValue({'telefone' : this.usuario.telefone});
      this.usuarioForm.patchValue({'email' : this.usuario.email});
      this.usuarioForm.patchValue({'nome' : this.usuario.nome});
      this.usuarioForm.patchValue({'cpf' : this.usuario.cpf});
      this.usuarioForm.patchValue({'permissao' : this.usuario.nivel_permissao});
      this.estadoNovo = false;
    }
  }
  onClickBuscar(){
      this.router.navigate(['../../buscar'], {relativeTo:this.route, queryParams: {tabela: 'usr'}});
  }
  onSubmit(){
    this.sideButtonClicked({tipo: 'salvar'});
  }

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
        else{
          
        }
      break;
      case 'apagar':
        this.uSvc.delete(this.usuario);
        window.alert('Apagado!');
      break;
      default:
        break;
    }
  }
}
