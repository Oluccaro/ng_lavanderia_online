import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFuncComponent } from './home-func/home-func.component';

import { FuncionarioService } from './services/funcionario.service';

@NgModule({
  declarations: [
    HomeFuncComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [FuncionarioService],
})
export class FuncionarioModule {}
