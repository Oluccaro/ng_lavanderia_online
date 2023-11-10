import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { map } from 'rxjs';

const chave: string = "pedidos"
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  BASE_URL = "http://localhost:3000/pedidos";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.BASE_URL, this.httpOptions)
  }

  listarPorStatus(status: String): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.BASE_URL + `?status=${status}` )
  }
/*
  gerarPedido(): Observable<Pedido[]> {

  }

  aprovarOrcamento(): Observable<Pedido[]> {

  }
  
  rejeitarOrcamento(): Observable<Pedido[]> {

  }
  cancelarPedido(): Observable<Pedido[]> {

  }

  consultarPedido(): Observable<Pedido[]> {

  }

  pagarPedido(): Observable<Pedido[]> {

  }

  confirmarRecolhimento(): Observable<Pedido[]> {

  }

  confirmarLavagem(): Observable<Pedido[]> {

  }

  finalizarPedido(): Observable<Pedido[]> {

  }
*/
}