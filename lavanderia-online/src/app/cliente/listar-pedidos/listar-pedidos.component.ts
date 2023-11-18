import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Usuario } from 'src/app/shared';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacaoComponent } from 'src/app/modal/modal-confirmacao';

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

  filtroStatus: string = '';

  aplicarFiltro() {
    if (this.filtroStatus) {
      this.pedidoService.listarPorStatus(this.filtroStatus).subscribe(pedidos => {
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
}
