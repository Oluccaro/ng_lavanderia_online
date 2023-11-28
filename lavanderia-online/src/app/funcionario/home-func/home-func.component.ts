import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Usuario } from 'src/app/shared';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacaoFuncComponent } from 'src/app/modal/modal-confirmacao-func';

@Component({
  selector: 'app-home-func',
  templateUrl: './home-func.component.html',
  styleUrls: ['./home-func.component.css']
})
export class HomeFuncComponent implements OnInit{
  private _usuario: Usuario;
  private _pedidos: Pedido[] = [];
  
  constructor(
    private loginService: LoginService,
    private pedidoService: PedidoService,
    private modalService: NgbModal
  ) {
      this._usuario = loginService.usuarioLogado;
    }

  ngOnInit(): void {
    this.pedidos = [];
    this.buscarPedidosAbertos();
    this.usuario = this.loginService.usuarioLogado;
  }

  public get usuario(): Usuario {
    return this._usuario;
  }
  public set usuario(value: Usuario) {
    this._usuario = value;
  }

  public get pedidos(): Pedido[] {
    return this._pedidos;
  }
  public set pedidos(value: Pedido[]) {
    this._pedidos = value;
  }

  public buscarPedidosAbertos(){
    return this.pedidoService.listarPorStatus('EM ABERTO')
               .subscribe(pedidos => { this.pedidos = pedidos});
  }

  abrirModal(pedido: Pedido){
    const modalRef = this.modalService.open(ModalConfirmacaoFuncComponent);
    modalRef.componentInstance.pedido = pedido;
  }

  public get pedidosOrdenados(){
    return this.pedidos.sort(function(a,b){
      let dataA = new Date(a.data!);
      let dataB = new Date(b.data!);
      return dataA.getTime() - dataB.getTime();
    })
  }

  goRelatorios() {
    this.router.navigate(['/funcionario/relatorios']);
  };
}
