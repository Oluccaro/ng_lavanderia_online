import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/shared/models/pedido.model';

const LS_CHAVE: string = "pedidos"

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
    return this.http.get<Pedido[]>(
      this.BASE_URL,
      this.httpOptions)
  }

  listarPorStatus(status: String): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(
      this.BASE_URL + `?status=${status}`,
      this.httpOptions)
  }

  listarPorData(dataInicial: Date, dataFinal: Date): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(
      this.BASE_URL + `?status=${status}`,
      this.httpOptions)
  }

  gerarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(
      this.BASE_URL,
      JSON.stringify(pedido),
      this.httpOptions)
  }

  atualizarStatus(novoStatus: string, pedido: Pedido): Observable<Pedido> {
    pedido.status = novoStatus;
    return this.http.put<Pedido>(
      this.BASE_URL + `/${pedido.id}`,
      JSON.stringify(pedido),
      this.httpOptions)
  }

  buscarPorId(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(
      this.BASE_URL + `/${id}`,
      this.httpOptions);
  }
}
