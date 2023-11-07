import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component'


@NgModule({
  declarations: [
    HomeComponent,
    ConsultarPedidoComponent,
    NovoPedidoComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ConsultarPedidoComponent,
    NovoPedidoComponent,
    PedidosComponent
  ]
})
export class ClienteModule { }
