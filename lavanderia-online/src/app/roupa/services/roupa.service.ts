import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Roupa } from '../../shared/models/roupa.model';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
const LS_CHAVE: string = 'roupas';

@Injectable({
  providedIn: 'root',
})
export class RoupaService {
  BASE_URL = 'http://localhost:3000/roupas';
  private roupaAdicionadaSubject = new Subject<Roupa>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  emitirRoupaAdicionada(roupa: Roupa): void {
    this.roupaAdicionadaSubject.next(roupa);
  }

  obterRoupaAdicionada(): Observable<Roupa> {
    return this.roupaAdicionadaSubject.asObservable();
  }

  listarRoupas(): Observable<Roupa[]> {
    return this.http.get<Roupa[]>(this.BASE_URL, this.httpOptions);
  }

  gerarRoupa(roupa: Roupa): Observable<Roupa> {
    return this.http.post<Roupa>(
      this.BASE_URL,
      JSON.stringify(roupa),
      this.httpOptions
    );
  }

  /*obterRoupa(id: number): Observable<Roupa> {
              return this.http.get<Roupa>(
                `${this.BASE_URL}/${id}`);
                }
                */

  atualizarRoupa(
    novaDescricao: string,
    novoPreco: number,
    novoPrazo: number,
    novaImagem: string,
    id: number,
    roupa: Roupa
  ): Observable<Roupa> {
    roupa.descricao = novaDescricao;
    roupa.preco = novoPreco;
    roupa.prazo = novoPrazo;
    roupa.imagem = novaImagem;
    return this.http.put<Roupa>(
      `${this.BASE_URL}/${id}`,
      JSON.stringify(roupa),
      this.httpOptions
    );
  }

  excluirRoupa(id: number): Observable<Roupa> {
    return this.http.delete<Roupa>(this.BASE_URL + id, this.httpOptions);
  }
}
