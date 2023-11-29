import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeFuncComponent } from './home-func/home-func.component';
import { FuncionarioService } from './services/funcionario.service';
import { ListagemComponent } from './listagem/listagem.component';
import { ModalModule } from '../modal';
import { SharedModule } from '../shared';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ManutencaoComponent } from './manutencao/manutencao.component';

@NgModule({
  declarations: [
    HomeFuncComponent,
    RelatoriosComponent,
    ManutencaoComponent,
    ListagemComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    SharedModule,
    BsDatepickerModule,
  ],
  exports: [
    HomeFuncComponent,
    RelatoriosComponent,
    ManutencaoComponent,
    ListagemComponent,
  ],
  providers: [FuncionarioService],
})
export class FuncionarioModule {}
