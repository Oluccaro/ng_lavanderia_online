import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoService } from './services/pedido.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PedidoService,
    RouterModule
  ]
})
export class PedidoModule { }
