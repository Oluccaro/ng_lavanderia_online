import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Usuario } from 'src/app/shared';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { NgbModal, NgbDateStruct, NgbCalendar, NgbDatepickerConfig, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacaoFuncComponent } from 'src/app/modal/modal-confirmacao-func';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{
  private _usuario: Usuario;
  private _pedidos: Pedido[] = [];
  filtroListagem: string = '';
  dataInicial!: Date;
  dataFinal!: Date;
  
  constructor(
    private loginService: LoginService,
    private pedidoService: PedidoService,
    private modalService: NgbModal
  ) {
      this._usuario = loginService.usuarioLogado;
    }

  ngOnInit(): void {
    this.pedidos = [];
    this.buscarPedidos();
    this.usuario = this.loginService.usuarioLogado;
    this.dataFinal = new Date;
    this.dataInicial = new Date;
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

  public buscarPedidos(){
    return this.pedidoService.listarTodos()
               .subscribe(pedidos => { this.pedidos = pedidos});
  }

  abrirModal(pedido: Pedido){
    const modalRef = this.modalService.open(ModalConfirmacaoFuncComponent);
    modalRef.componentInstance.pedido = pedido;
  }

  aplicarFiltroIntervalo() {
    this.pedidoService.listarPorData(this.dataInicial, this.dataFinal).subscribe(pedidos => {
      this.pedidos = pedidos;
    })
  }

  public get pedidosOrdenados(){
    return this.pedidos.sort(function(a,b){
      let dataA = new Date(a.data!);
      let dataB = new Date(b.data!);
      return dataA.getTime() - dataB.getTime();
    })
  }
}
