import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro";
import { RecuperaSenhaComponent } from "./recupera-senha";

export const LoginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'autocadastro',
    component: CadastroComponent
  },{
    path: 'recuperasenha',
    component: RecuperaSenhaComponent
  }
];