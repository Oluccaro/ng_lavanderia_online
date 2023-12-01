import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Usuario } from 'src/app/shared';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacaoComponent } from 'src/app/modal/modal-confirmacao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private _usuario!: Usuario;
  pedidos: Pedido[] = [];

  constructor(
    private loginService: LoginService,
    private pedidoService: PedidoService,
    private router: Router,
    private modalService: NgbModal
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

  public get pedidosOrdenados(){
    return this.pedidos.sort(function(a,b){
      let dataA = new Date(a.dataPedido!);
      let dataB = new Date(b.dataPedido!);
      return dataB.getTime() - dataA.getTime();
    })
  }

  public buscarPedidosAbertos(){
    return this.pedidoService.listarPorStatus()
               .subscribe(pedidos => { this.pedidos = pedidos});
  }

  goPedidos() {
    this.router.navigate(['/cliente/pedidos']);
  }

  abrirModal(pedido: Pedido) {
    const modalRef = this.modalService.open(ModalConfirmacaoComponent);
    modalRef.componentInstance.pedido = pedido;
  }
}
