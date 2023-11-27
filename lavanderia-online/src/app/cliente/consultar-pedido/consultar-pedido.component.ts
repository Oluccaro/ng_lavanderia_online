import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Usuario } from 'src/app/shared';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css']
})
export class ConsultarPedidoComponent {
  npedido!: number;
  private _usuario!: Usuario;
  pedido!: Pedido;

  constructor(
    private loginService: LoginService,
    private pedidoService: PedidoService,
    private router: Router,
    route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  public get usuario(): Usuario {
    return this._usuario;
  }
  public set usuario(value: Usuario) {
    this._usuario = value;
  }

  ngOnInit(): void {
    this.usuario = this.loginService.usuarioLogado;
  }

  consultarPedido() {
    this.pedidoService.buscarPorId(this.npedido).subscribe(
      (pedido: Pedido) => {
        this.pedido = pedido;
      }
    )
  }
}
