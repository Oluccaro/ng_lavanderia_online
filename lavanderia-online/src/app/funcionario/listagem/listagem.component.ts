import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Usuario } from 'src/app/shared';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacaoFuncComponent } from 'src/app/modal/modal-confirmacao-func';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { map } from 'rxjs';
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{
  private _usuario: Usuario;
  private _pedidos: Pedido[] = [];
  filtroListagem: string = '';
  dataInicial: Date = new Date();
  dataFinal: Date = new Date();

  datepickerConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-default',
    dateInputFormat: 'DD/MM/YYYY',
  };
  
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
    if (this.filtroListagem == 'HOJE'){
      let hojeInicial = new Date;
      let hojeFinal = new Date;
      this.dataInicial = hojeInicial
      this.dataFinal = hojeFinal
    }
    this.pedidoService.listarPorData(this.dataInicial, this.dataFinal).subscribe(pedidos => {
      this.pedidos = pedidos;
    })
  }

  public get pedidosOrdenados(){
    return this.pedidos.sort(function(a,b){
      let dataA = new Date(a.dataPedido!);
      let dataB = new Date(b.dataPedido!);
      return dataA.getTime() - dataB.getTime();
    })
  }
}
