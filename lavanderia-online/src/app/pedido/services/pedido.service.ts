import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { map } from 'rxjs';
import { Usuario } from 'src/app/shared';
import { LoginService } from 'src/app/auth';

const LS_CHAVE: string = "pedidos"

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  BASE_URL = "http://localhost:9090/pedido";
  private usuario: Usuario;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) {
      this.usuario = this.loginService.usuarioLogado;
      this.inicializar();
    }

  private inicializar(){
    this.usuario = this.loginService.usuarioLogado;
  }

  listarTodos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(
      this.BASE_URL + `/cliente/${this.usuario.id}`,
      this.httpOptions)
  }

  listarPorStatus(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(
      this.BASE_URL + `/cliente/${this.usuario.id}`,
      this.httpOptions)
  }

  listarPorData(dataInicial: Date, dataFinal: Date): Observable<Pedido[]> {
    return this.listarTodos().pipe(
      map(pedidos => pedidos.filter(pedido => {
        if (pedido.dataPedido){
          const dataPedido = new Date(pedido.dataPedido);
          return (
            (dataPedido.getDate() >= dataInicial.getDate()&& dataPedido.getMonth() <= dataFinal.getMonth())
            &&(dataPedido.getMonth() >= dataInicial.getMonth() && dataPedido.getMonth() <= dataFinal.getMonth())
            &&(dataPedido.getFullYear() >= dataInicial.getFullYear() && dataPedido.getFullYear() <= dataFinal.getFullYear()));  
        }
        return false;
      }))
    );
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
