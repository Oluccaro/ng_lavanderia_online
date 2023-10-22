import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Login } from 'src/app/shared';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public get usuarioLogado() : Usuario {
    let usuario = localStorage[LS_CHAVE];
    return (usuario ? JSON.parse(usuario) : null);
  }
  
  public set usuarioLogado(usuario : Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  public logout(){
    delete localStorage[LS_CHAVE];
  }
  
  public login(login: Login): Observable<Usuario | null>{
    let usuarioCliente = new Usuario(1, "João Clienteson", "joao-cliente", "admin", "CLIENTE");
    let usuarioFuncionario = new Usuario(2, "Maria Funcionaria", "maria-funcionaria", "admin", "FUNC");
    
    if(login.login == usuarioCliente.login && login.senha == usuarioCliente.senha){
      return of(usuarioCliente);
    }
    else if (login.login == usuarioFuncionario.login && login.senha == usuarioFuncionario.senha){
      return of(usuarioFuncionario);
    }
    else {
      return of(null);
    }

  }
  
}
