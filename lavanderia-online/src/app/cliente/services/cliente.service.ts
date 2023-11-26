import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';

const LS_CHAVE: string = "clientes"

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  BASE_URL = "http://localhost:3000/usuarios";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      this.BASE_URL,
      this.httpOptions)
  }
}