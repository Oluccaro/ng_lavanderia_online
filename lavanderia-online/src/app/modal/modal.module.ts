import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmacaoComponent } from './modal-confirmacao';
import { ModalOrcamentoComponent } from './modal-orcamento/modal-orcamento.component';

@NgModule({
  declarations: [
    ModalConfirmacaoComponent,
    ModalOrcamentoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalConfirmacaoComponent,
    ModalOrcamentoComponent
  ]
})
export class ModalModule { }
