import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalConfirmacaoComponent } from './modal-confirmacao';
import { ModalOrcamentoComponent } from './modal-orcamento/modal-orcamento.component';
import { ModalPedidoComponent } from './modal-pedido/modal-pedido.component';
import { ModalManutencaoRoupaComponent } from './modal-manutencao-roupa/modal-manutencao-roupa.component';
import { ModalFuncionarioManutencaoComponent } from './modal-funcionario-manutencao/modal-funcionario-manutencao.component';

@NgModule({
  declarations: [
    ModalConfirmacaoComponent,
    ModalOrcamentoComponent,
    ModalPedidoComponent,
    ModalManutencaoRoupaComponent,
    ModalFuncionarioManutencaoComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ModalConfirmacaoComponent,
    ModalOrcamentoComponent,
    ModalPedidoComponent,
  ],
})
export class ModalModule {}
