import { Injectable} from '@angular/core';
import { Observable, filter, map, of } from 'rxjs';
import { Usuario, Login } from 'src/app/shared';
import { UsuarioService } from './usuario.service';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuario?: Usuario;
  constructor(private usuarioService: UsuarioService) {
  }

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
  
  public login(login: Login): Observable<Usuario[] | undefined>{
    let observableUsuario = this.usuarioService.login(login);
    
    return observableUsuario;
  }
  
}
