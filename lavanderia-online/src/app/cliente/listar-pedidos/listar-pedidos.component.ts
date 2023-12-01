import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Usuario } from 'src/app/shared';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacaoComponent } from 'src/app/modal/modal-confirmacao';
import { ModalPedidoComponent } from 'src/app/modal/modal-pedido';

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
      this.pedidos = [];
      this.listarTodos();
      this.usuario = this.loginService.usuarioLogado;
  }

  listarAbertos(): Pedido[] {
    this.buscarPedidosAbertos();
    return this.pedidos;
  }

  public buscarPedidosAbertos(){
    if (this.usuario?.id) {
      return this.pedidoService.listarPorStatus()
               .subscribe(pedidos => { this.pedidos = pedidos});
    }
    else {
      return console.error('ID do usuário é indefinido.');
    }
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

  public get pedidosOrdenados(){
    return this.pedidos.sort(function(a,b){
      let dataA = new Date(a.dataPedido!);
      let dataB = new Date(b.dataPedido!);
      return dataB.getTime() - dataA.getTime();
    })
  }

  filtroStatus: number = 0;

  aplicarFiltro() {
    if (this.filtroStatus) {
      this.pedidoService.listarPorStatus().subscribe(pedidos => {
        this.pedidos = pedidos;
      });
    } else {
      this.listarTodos();
    }
  }

  goPedidos() {
    this.router.navigate(['/cliente/pedidos']);
  };

  abrirModal(pedido: Pedido){
    const modalRef = this.modalService.open(ModalConfirmacaoComponent);
    modalRef.componentInstance.pedido = pedido;
  }

  abrirModalPedido(pedido: Pedido){
    const modalRef = this.modalService.open(ModalPedidoComponent);
    modalRef.componentInstance.pedido = pedido;
  }

}
