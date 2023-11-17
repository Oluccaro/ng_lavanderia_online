import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { ConsultarPedidoComponent } from './consultar-pedido';
import { NovoPedidoComponent } from './novo-pedido';
import { ListarPedidosComponent } from './listar-pedidos'
import { ModalConfirmacaoComponent } from '../modal/modal-confirmacao';
import { ModalModule } from '../modal';
import { PagarComponent } from './pagar/pagar.component';


@NgModule({
  declarations: [
    HomeComponent,
    ConsultarPedidoComponent,
    NovoPedidoComponent,
    ListarPedidosComponent,
    PagarComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [
    HomeComponent,
    ConsultarPedidoComponent,
    NovoPedidoComponent,
    ListarPedidosComponent
  ]
})
export class ClienteModule { }
