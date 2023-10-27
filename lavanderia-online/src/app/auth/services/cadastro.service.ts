import { Injectable } from '@angular/core';
import { Endereco } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  private static viaCepUrl : string = "https://viacep.com.br/ws/";

  public static buscaCepViaWS(cep: string) : Endereco {
    
    let regexCep = new RegExp(/^\d{5}\-?\d{3}$/, 'i');
    if(!cep.match(regexCep)) return new Endereco();
    let cepClean: string = cep.match(/^\d{8}$/)![0];
    let url = `${this.viaCepUrl}${cepClean}/json`;
    try{
      fetch(url, 
            {
              method: 'GET',
              headers: {'Content-Type': 'application/json; charset=UTF-8'}
            })
      .then((res) => res.json())
      .then((obj)=>{
        if(obj.erro) return new Endereco();
        return new Endereco(obj.cep, 
                            obj.logradouro, 
                            obj.bairro,
                            obj.cidade,
                            obj.estado);
      });
    } 
    catch (e){

    }
                // .then((res)=>console.log(res.json()));
    return new Endereco();
  }
}
