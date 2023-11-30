import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Funcionario } from 'src/app/shared/models/funcionario.model';

const LS_CHAVE: string = 'funcionarios';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private BASE_URL = 'http://localhost:3000/manutencao-funcionario';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  public listarFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.BASE_URL, this.httpOptions);
  }

  public buscarPorId(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(this.BASE_URL + id, this.httpOptions);
  }

  public adicionarFuncionario(
    funcionario: Funcionario
  ): Observable<Funcionario> {
    return this.http.post<Funcionario>(
      this.BASE_URL,
      JSON.stringify(funcionario),
      this.httpOptions
    );
  }

  public atualizarFuncionario(
    novoNome: string,
    novoLogin: string,
    novaData: string,
    funcionario: Funcionario
  ): Observable<Funcionario> {
    funcionario.nome = novoNome;
    funcionario.login = novoLogin;
    funcionario.dataDeNascimento = novaData;
    return this.http.put<Funcionario>(
      this.BASE_URL + funcionario.id,
      JSON.stringify(funcionario),
      this.httpOptions
    );
  }

  public excluirFuncionario(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(this.BASE_URL + id, this.httpOptions);
  }
}
