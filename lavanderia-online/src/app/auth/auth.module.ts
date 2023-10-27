import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';



@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    RecuperarSenhaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }
