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
  
}
