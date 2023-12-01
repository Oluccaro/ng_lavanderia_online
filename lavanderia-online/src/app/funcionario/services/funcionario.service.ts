import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Funcionario } from 'src/app/shared/models/funcionario.model';

const LS_CHAVE: string = 'funcionarios';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private BASE_URL = 'http://localhost:8080/funcionario';

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
    return this.http.get<Funcionario>(this.BASE_URL + `/${id}`, this.httpOptions);
  }

  public adicionarFuncionario(
    funcionario: Funcionario
  ): Observable<Funcionario> {
    return this.http
      .post<Funcionario>(
        this.BASE_URL,
        JSON.stringify(funcionario),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  public atualizarFuncionario(
    funcionario: Funcionario
  ): Observable<Funcionario> {
    funcionario.nome = novoNome;
    funcionario.login = novoLogin;
    funcionario.dataDeNascimento = novaData;
    return this.http.put<Funcionario>(
      this.BASE_URL + `/${funcionario.id}`,
      JSON.stringify(funcionario),
      this.httpOptions
    );
  }

  public excluirFuncionario(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(this.BASE_URL + `${id}`, this.httpOptions);
  }

  // Função para lidar com erros
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido.';

    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = `Código do erro: ${error.status}, Mensagem: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }

  public excluirFuncionario(id: number): Observable<Funcionario> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.delete<Funcionario>(url, this.httpOptions);
  }

  public listarFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.BASE_URL, this.httpOptions);
  }
  public buscarPorId(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(this.BASE_URL + id, this.httpOptions);
  }
}
