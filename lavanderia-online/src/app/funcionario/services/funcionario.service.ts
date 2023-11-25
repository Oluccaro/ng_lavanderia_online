import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/shared/models/funcionario.model';

const LS_CHAVE: string = 'funcionarios';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  BASE_URL = 'http://localhost:3000/manutencao-funcionario';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  listarFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.BASE_URL, this.httpOptions);
  }

  adicionarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.BASE_URL, funcionario);
  }

  atualizarFuncionario(funcionario: Funcionario
  ): Observable<Funcionario> {
    return this.http.put<Funcionario>(this.BASE_URL, funcionario);
  }

  excluirFuncionario(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
}
