import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth';
import { Usuario } from 'src/app/shared';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  constructor(private loginService: LoginService,
              private router: Router,
              route: ActivatedRoute) {
  };

  public get usuario() : Usuario | undefined {
    return this.loginService.usuarioLogado;
  }

  public logout(): void{
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }

  goHome() {
    this.router.navigate(['/cliente/home']);
  };

  goPedidos() {
    this.router.navigate(['/cliente/pedidos']);
  };

  goConsulta() {
    this.router.navigate(['/cliente/consulta']);
  };

  goNovo() {
    this.router.navigate(['/cliente/novo']);
  };

  goHomeFunc() {
    this.router.navigate(['/funcionario/home']);
  };

  goListagem() {
    this.router.navigate(['/funcionario/listagem']);
  };

  goRoupas() {
    this.router.navigate(['/funcionario/roupas']);
  };

  goFuncionarios() {
    this.router.navigate(['/funcionario/funcionarios']);
  };

  goRelatorios() {
    this.router.navigate(['/funcionario/relatorios']);
  };
  
}
