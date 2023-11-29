import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeFuncComponent } from './home-func/home-func.component';
import { FuncionarioService } from './services/funcionario.service';
import { SharedModule } from '../shared';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ManutencaoComponent } from './manutencao/manutencao.component';

@NgModule({
  declarations: [
    HomeFuncComponent,
    RelatoriosComponent,
    ManutencaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BsDatepickerModule
  ],
  providers: [FuncionarioService],
})
export class FuncionarioModule {}
