import { Injectable } from '@angular/core';
import { Roupa } from 'src/app/shared/models/roupa.model';

const LS_CHAVE: string = 'roupa';

@Injectable({
  providedIn: 'root',
})
export class RoupaService {
  constructor() {}

  listarTodos(): Roupa[] {
    const roupas = localStorage[LS_CHAVE];
    return roupas ? JSON.parse(roupas) : [];
  }
}
