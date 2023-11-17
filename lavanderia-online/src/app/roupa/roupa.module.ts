import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoupaService } from './services/roupa.service';
import { ListarRoupaComponent } from './listar-roupa/listar-roupa.component';
import { AdicionarRoupaComponent } from './adicionar-roupa/adicionar-roupa.component';
import { AtualizarRoupaComponent } from './atualizar-roupa/atualizar-roupa.component';
import { ExcluirRoupaComponent } from './excluir-roupa/excluir-roupa.component';

@NgModule({
  declarations: [
    ListarRoupaComponent,
    AdicionarRoupaComponent,
    AtualizarRoupaComponent,
    ExcluirRoupaComponent,
  ],
  imports: [CommonModule],
  providers: [RoupaService],
})
export class RoupaModule {}
