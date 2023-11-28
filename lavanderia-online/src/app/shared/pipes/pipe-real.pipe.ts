import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeReal'
})
export class PipeRealPipe implements PipeTransform {

  transform(value: number): string {
    // Garantir duas casas decimais, mesmo para valores inteiros
    const precoFormatado = value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Adicionar ",00" se for um número inteiro
    return precoFormatado.indexOf(',') === -1 ? `R$ ${precoFormatado},00` : `R$ ${precoFormatado}`;
  }

}