import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Endereco } from 'src/app/shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }

  private BASE_URL : string = "https://viacep.com.br/ws/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public buscaViaCep(cep: string): Observable<Endereco> {
    let regexCep = new RegExp(/^\d{5}\-?\d{3}$/, 'i');
    if (!cep.match(regexCep)){
      return of(new Endereco);
    }
    else {
      let cepClean: string = cep.match(/^\d{8}$/)![0];
      return this.httpClient.get<Endereco>(this.BASE_URL + cepClean + '/json',
                                           this.httpOptions);
    }
  }

}
