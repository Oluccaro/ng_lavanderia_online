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
/*
  consultarPedido(): Observable<Pedido[]> {

  }

  pagarPedido(pedido: Pedido): Observable<Pedido> {
    pedido.status = "PAGO";
    return this.http.put<Pedido>(
      this.BASE_URL + `/${pedido.id}`,
      JSON.stringify(pedido),
      this.httpOptions)
  }

  confirmarRecolhimento(pedido: Pedido): Observable<Pedido> {
    pedido.status = "RECOLHIDO";
    return this.http.put<Pedido>(
      this.BASE_URL + `/${pedido.id}`,
      JSON.stringify(pedido),
      this.httpOptions)
  }

  confirmarLavagem(pedido: Pedido): Observable<Pedido> {
    pedido.status = "AGUARDANDO PAGAMENTO";
    return this.http.put<Pedido>(
      this.BASE_URL + `/${pedido.id}`,
      JSON.stringify(pedido),
      this.httpOptions)
  }

  finalizarPedido(pedido: Pedido): Observable<Pedido> {
    pedido.status = "FINALIZADO";
    return this.http.put<Pedido>(
      this.BASE_URL + `/${pedido.id}`,
      JSON.stringify(pedido),
      this.httpOptions)
  }
*/
}
