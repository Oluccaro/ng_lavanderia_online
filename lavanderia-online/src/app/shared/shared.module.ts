import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
// Diretivas
import { AlfabeticoDirective, AlfanumericoDirective, EmailDirective, NumericoDirective } from './directives';



@NgModule({
  declarations: [
    AlfabeticoDirective,
    AlfanumericoDirective,
    EmailDirective,
    NumericoDirective
  ],
  imports: [
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe  
  ],
  exports: [
    AlfabeticoDirective,
    AlfanumericoDirective,
    EmailDirective,
    NumericoDirective,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask()
  ]
})
export class SharedModule { }
