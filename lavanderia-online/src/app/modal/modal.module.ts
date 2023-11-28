import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmacaoComponent } from './modal-confirmacao';
import { ModalOrcamentoComponent } from './modal-orcamento/modal-orcamento.component';
import { ModalPedidoComponent } from './modal-pedido/modal-pedido.component';
import { ModalConfirmacaoFuncComponent } from './modal-confirmacao-func/modal-confirmacao-func.component';

@NgModule({
  declarations: [
    ModalConfirmacaoComponent,
    ModalOrcamentoComponent,
    ModalPedidoComponent,
    ModalConfirmacaoFuncComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalConfirmacaoComponent,
    ModalOrcamentoComponent,
    ModalPedidoComponent,
    ModalConfirmacaoFuncComponent
  ]
})
export class ModalModule { }
