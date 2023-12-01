import { Component, OnInit, ViewChild } from '@angular/core';
import { Login, Usuario } from 'src/app/shared';
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
  public passwordVisible: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {  
    this.verificaLogin();
  } 

  ngOnInit(): void {
    this.verificaLogin();
    this.route.queryParams.subscribe(param => this.message = param["error"])
  }

  logar(): void{
    console.log(JSON.stringify(this.login));
    
    this.loading = true;
    if(this.formLogin.form.valid){
      
      this.loginService.login(this.login).subscribe(user => {
        let usuario: Usuario | null = user ? user : null;
        
        if(usuario != null){
          this.loginService.usuarioLogado = usuario;
          console.log(this.loginService.usuarioLogado);
          
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
  private verificaLogin(){
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
  togglePassword(): void{
    this.passwordVisible = !this.passwordVisible;
  }
}
