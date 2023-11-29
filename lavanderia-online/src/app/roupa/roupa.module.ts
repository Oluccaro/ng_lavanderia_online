import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoupaService } from './services/roupa.service';
import { ListarRoupaComponent } from './listar-roupa/listar-roupa.component';
import { AtualizarRoupaComponent } from './atualizar-roupa/atualizar-roupa.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from '../modal';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    ListarRoupaComponent,
    AtualizarRoupaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ModalModule,
    SharedModule
  ],
  providers: [
    RoupaService
  ],
  exports: [
    ListarRoupaComponent,
    AtualizarRoupaComponent
  ]
})
export class RoupaModule {}
