import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roupa } from '../../shared/models/roupa.model';
const LS_CHAVE: string = 'roupas';

@Injectable({
  providedIn: 'root',
})
export class RoupaService {
  BASE_URL = 'http://localhost:3000/roupas';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  listarRoupas(): Observable<Roupa[]> {
    return this.http.get<Roupa[]>(this.BASE_URL, this.httpOptions);
  }

  adicionarRoupa(roupa: Roupa): Observable<Roupa> {
    return this.http.post<Roupa>(this.BASE_URL, roupa);
  }

  atualizarRoupa(id: number, roupa: Roupa): Observable<Roupa> {
    roupa.descricao = novaDescricao;
    roupa.preco = novoPreco;
    roupa.prazo = novoPrazo;
    roupa.imagem = novaImagem;
    return this.http.put<Roupa>(
      this.BASE_URL + `/${roupa.id}`,
      JSON.stringify(roupa),
      this.httpOptions
    );
  }

  excluirRoupa(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
}
