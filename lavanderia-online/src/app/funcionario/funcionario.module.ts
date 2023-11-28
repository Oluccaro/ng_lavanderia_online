import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFuncComponent } from './home-func/home-func.component';

import { FuncionarioService } from './services/funcionario.service';
import { ListagemComponent } from './listagem/listagem.component';

import { ModalModule } from '../modal';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    HomeFuncComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    HomeFuncComponent,
    ListagemComponent
  ],
  providers: [FuncionarioService],
})
export class FuncionarioModule {}
