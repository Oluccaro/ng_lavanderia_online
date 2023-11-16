import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Usuario } from 'src/app/shared';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit{
  private _usuario!: Usuario;
  pedidos: Pedido[] = [];

  constructor(
    private loginService: LoginService,
    private pedidoService: PedidoService,
    private router: Router,
    route: ActivatedRoute
  ) {}

  public get usuario(): Usuario {
    return this._usuario;
  }
  public set usuario(value: Usuario) {
    this._usuario = value;
  }

  ngOnInit(): void {
      this.pedidos = [];
      this.listarTodos();
      this.usuario = this.loginService.usuarioLogado;
  }

  listarAbertos(): Pedido[] {
    this.buscarPedidosAbertos();
    return this.pedidos;
  }

  public buscarPedidosAbertos(){
    this.pedidoService.listarPorStatus('ABERTO').subscribe(pedidos => {this.pedidos = pedidos});
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

  goPedidos() {
    this.router.navigate(['/cliente/pedidos']);
  };
}
