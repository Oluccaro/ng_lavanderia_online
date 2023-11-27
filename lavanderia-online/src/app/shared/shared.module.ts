import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
// Diretivas
import { AlfabeticoDirective, AlfanumericoDirective, EmailDirective, NumericoDirective, NotzeroDirective } from './directives';



@NgModule({
  declarations: [
    AlfabeticoDirective,
    AlfanumericoDirective,
    EmailDirective,
    NumericoDirective,
    NotzeroDirective
  ],
  imports: [
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [
    AlfabeticoDirective,
    AlfanumericoDirective,
    EmailDirective,
    NumericoDirective,
    NotzeroDirective,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class SharedModule { }
