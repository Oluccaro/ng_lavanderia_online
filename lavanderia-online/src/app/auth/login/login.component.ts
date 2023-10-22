import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from 'src/app/shared';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin! : NgForm;
  public login: Login = new Login();
  public loading: boolean = false;
  public message!: string;
  
  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    let usuarioLogado = this.loginService.usuarioLogado;
    if(usuarioLogado){
      if(usuarioLogado.perfil == 'CLIENTE'){
        this.router.navigate(["/cliente"]);
      }
      else if(usuarioLogado.perfil == 'FUNC'){
        this.router.navigate(['/funcionario']);
      }
    }  
  } 

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => this.message = param["error"])
  }

  logar(): void{
    this.loading = true;
    if(this.formLogin.form.valid){
      this.loginService.login(this.login).subscribe((usuario) => {
        if(usuario != null){
          this.loginService.usuarioLogado = usuario;
          this.loading = false;
          if(usuario.perfil == 'CLIENTE'){
            this.router.navigate(["/cliente/home"]);
          }
          else if (usuario.perfil == 'FUNC'){
            this.router.navigate(['/funcionario/home'])
          }
        }
        else{
          this.message = "Usuário/Senha Inválidos";
        }
      })
    }
    this.loading = false;
  }
}
