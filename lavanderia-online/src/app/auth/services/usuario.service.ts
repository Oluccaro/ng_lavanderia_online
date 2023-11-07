import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, Usuario } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private BASE_URL: string = "http://localhost:3000/usuarios/";
  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public listarTodos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.BASE_URL,
                                          this.httpOptions);
  }
  
  public buscarPorId(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.BASE_URL + id,
                                        this.httpOptions);
  }

  public inserir(usuario: Usuario){
    return this.http.post<Usuario>(this.BASE_URL,
                                   JSON.stringify(usuario),
                                   this.httpOptions)
  }

  public remover(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(this.BASE_URL + id,
                                           this.httpOptions)
  }

  public alterar(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(this.BASE_URL + usuario.id,
                                        JSON.stringify(usuario),
                                        this.httpOptions)
  }

  public login(login: Login): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.BASE_URL}?login=${login.login}&senha=${login.senha}`,
                                  this.httpOptions);
  }
}
