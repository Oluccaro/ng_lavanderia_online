import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { ConsultarPedidoComponent } from './consultar-pedido';
import { NovoPedidoComponent } from './novo-pedido';
import { ListarPedidosComponent } from './listar-pedidos'


@NgModule({
  declarations: [
    HomeComponent,
    ConsultarPedidoComponent,
    NovoPedidoComponent,
    ListarPedidosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ConsultarPedidoComponent,
    NovoPedidoComponent,
    ListarPedidosComponent
  ]
})
export class ClienteModule { }
