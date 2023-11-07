import { Endereco } from "./endereco.model";

export class Usuario {
  constructor(
              public id? : number,
              public nome? : string,
              public login? : string,
              public senha? : number,
              public cpf?: string,
              public perfil? : string,
              public telefone?: string,
              public endereco? : Endereco ) {
      this.senha = this.gerarSenha();
      this.id = this.gerarId();
  }

  public gerarSenha(): number {
    let senha : number = Math.round(Math.random()*10000);
    return senha;
  }

  public gerarId(): number{
    let data = new Date();
    return data.getTime();
  }

  public setPerfil(perfil : string){
    this.perfil = perfil;
  }

  public setEndereco(endereco: Endereco){
    this.endereco = endereco;
  }
}
