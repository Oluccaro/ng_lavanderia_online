import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalConfirmacaoComponent } from './modal-confirmacao';
import { ModalOrcamentoComponent } from './modal-orcamento/modal-orcamento.component';
import { ModalPedidoComponent } from './modal-pedido/modal-pedido.component';
import { ModalManutencaoRoupaComponent } from './modal-manutencao-roupa/modal-manutencao-roupa.component';
import { ModalFuncionarioManutencaoComponent } from './modal-funcionario-manutencao/modal-funcionario-manutencao.component';
import { ModalConfirmacaoFuncComponent } from './modal-confirmacao-func/modal-confirmacao-func.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    ModalConfirmacaoComponent,
    ModalOrcamentoComponent,
    ModalPedidoComponent,
    ModalManutencaoRoupaComponent,
    ModalFuncionarioManutencaoComponent,
    ModalConfirmacaoFuncComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ModalConfirmacaoComponent,
    ModalOrcamentoComponent,
    ModalPedidoComponent,
    ModalManutencaoRoupaComponent,
    ModalFuncionarioManutencaoComponent,
    ModalConfirmacaoFuncComponent,
  ],
})
export class ModalModule {}
