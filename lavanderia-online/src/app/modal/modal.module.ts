import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmacaoComponent } from './modal-confirmacao';
import { ModalOrcamentoComponent } from './modal-orcamento/modal-orcamento.component';
import { ModalPedidoComponent } from './modal-pedido/modal-pedido.component';

@NgModule({
  declarations: [
    ModalConfirmacaoComponent,
    ModalOrcamentoComponent,
    ModalPedidoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalConfirmacaoComponent,
    ModalOrcamentoComponent,
    ModalPedidoComponent
  ]
})
export class ModalModule { }
