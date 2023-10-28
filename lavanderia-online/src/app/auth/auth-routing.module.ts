import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro";
import { RecuperarSenhaComponent } from "./recuperar-senha/recuperar-senha.component";
import { authGuard } from "./auth.guard";

export const LoginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'autocadastro',
    component: CadastroComponent
  },
  {
    path: 'recuperar-senha',
    component: RecuperarSenhaComponent
  }
];