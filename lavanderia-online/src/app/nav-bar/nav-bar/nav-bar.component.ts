import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth';
import { Usuario } from 'src/app/shared';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  private usuarioLogado?: Usuario;
  
  constructor(private loginService?: LoginService,
              private router?: Router,
              route?: ActivatedRoute) {
    this.usuarioLogado = loginService?.usuarioLogado;
  };

  public get usuario() : Usuario | undefined {
    return this.usuarioLogado;
  }

  public logout(): void{
    this.loginService?.logout();
    this.router?.navigate(['/login']);
  }
  
}
