import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
// Diretivas
import { AlfabeticoDirective, AlfanumericoDirective, EmailDirective, NumericoDirective, NotzeroDirective } from './directives';
import { PipeRealPipe } from './pipes';



@NgModule({
  declarations: [
    AlfabeticoDirective,
    AlfanumericoDirective,
    EmailDirective,
    NumericoDirective,
    NotzeroDirective,
    PipeRealPipe
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
    PipeRealPipe
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class SharedModule { }
