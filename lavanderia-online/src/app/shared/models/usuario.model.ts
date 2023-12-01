import { Endereco } from "./endereco.model";

export class Usuario {
  constructor(
              public id? : number,
              public nome? : string,
              public login? : string,
              public cpf?: string,
              public perfil? : string,
              public telefone?: string,
              public endereco? : Endereco ) {
  }

  public setPerfil(perfil : string){
    this.perfil = perfil;
  }

  public setEndereco(endereco: Endereco){
    this.endereco = endereco;
  }
}
