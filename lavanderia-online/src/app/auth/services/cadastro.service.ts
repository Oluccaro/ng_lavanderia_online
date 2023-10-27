import { Injectable } from '@angular/core';
import { Endereco } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  private static viaCepUrl : string = "https://viacep.com.br/ws/";

  public static async buscaCepViaWS(cep: string) : Promise<Endereco | undefined> {
    let url = `${this.viaCepUrl}${cep}/json`;
    try{
      fetch(url, 
            {
              method: 'GET',
              headers: {'Content-Type': 'application/json; charset=UTF-8'}
            })
      .then((res) => res.json())
      .then((obj)=>{
        if(obj.erro) return undefined;
        let endereco : Endereco = new Endereco(obj.cep, 
                                               obj.logradouro, 
                                               obj.bairro,
                                               obj.cidade,
                                               obj.estado);
        return endereco;
      });
    } catch (e){
      //console.log(e);
      
    }
                // .then((res)=>console.log(res.json()));
    return
  }
}
