import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { LoginService } from 'src/app/auth';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Usuario } from 'src/app/shared';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  private _usuario!: Usuario;
  pedidos: Pedido[] = [];

  constructor(
    private loginService: LoginService,
    private pedidoService: PedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public get usuario(): Usuario {
    return this._usuario;
  }
  public set usuario(value: Usuario) {
    this._usuario = value;
  }

  ngOnInit(): void {
      this.pedidos = [];
      this.listarAbertos();
      this.usuario = this.loginService.usuarioLogado;
  }

  listarAbertos(): Pedido[] {
    this.buscarPedidosAbertos();
    return this.pedidos;
  }

  public listarTodos(): Pedido[] {
    this.pedidoService.listarTodos().subscribe({
      next: (data: Pedido[]) => {
        if (data == null) {
          this.pedidos = [];
        }
        else {
          this.pedidos = data;
        }
      }
    });
    return this.pedidos;
  }
  
  public buscarPedidosAbertos(){
    this.pedidoService.listarPorStatus('ABERTO').subscribe(pedidos => {this.pedidos = pedidos});
  }
  goPedidos() {
    this.router.navigate(['./pedidos']);
  };
}
