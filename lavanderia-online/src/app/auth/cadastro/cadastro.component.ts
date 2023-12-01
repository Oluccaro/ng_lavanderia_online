import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente, Endereco, Login, Usuario } from 'src/app/shared';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService, LoginService, UsuarioService } from '../services';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  @ViewChild('cadastroForm') cadastroForm!: NgForm;
  public cliente!: Cliente;
  public endereco: Endereco = new Endereco();
  public usuario: Usuario = new Usuario();
  public message!: string;
  public login: Login = new Login();
  constructor(
    private cadastroService: CadastroService,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (param) => (this.message = param['error'])
    );
  }

  public buscaEndereco(cep: string): Endereco {
    this.cadastroService.buscaViaCep(cep).subscribe({
      next: (data: Endereco) => {
        if (data == null) {
          this.endereco = new Endereco();
        } else {
          console.log(data);

          this.endereco = data;
        }
      },
    });

    return this.endereco;
  }

  public cadastrar(): boolean {
    
    this.usuario.setEndereco(this.endereco);
    this.usuario.setPerfil('CLIENTE');
    this.usuarioService.inserir(this.usuario).subscribe(usuario =>{
      if(usuario != null){
    this.usuarioService.inserir(this.usuario).subscribe((usuario) => {
      if (usuario != null) {
        this.loginService.usuarioLogado = usuario;
        this.router.navigate(['/cliente/home']);
      }
    });
    return true;
  }

  public limparEmail() {
    const emailFormControl = this.cadastroForm.controls['email'];
  
    if (emailFormControl.invalid && (emailFormControl.dirty || emailFormControl.touched)) {
      this.usuario.login = ''; // Limpa o valor do campo de e-mail
    }
  }
    if (
      emailFormControl.invalid &&
      (emailFormControl.dirty || emailFormControl.touched)
    ) {
      this.usuario.email = ''; // Limpa o valor do campo de e-mail
    }
  }
}
