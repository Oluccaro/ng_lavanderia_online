import { Usuario } from './usuario.model';

export class Funcionario extends Usuario {
  private _dataDeNascimento: Date;

  constructor(
    id: number,
    login: string,
    nome: string,
    senha: number,
    perfil: string,
    dataDeNascimento: Date
  ) {
    super(id, login, nome, senha, perfil);
    this._dataDeNascimento = dataDeNascimento;
  }

  public get dataDeNascimento(): Date {
    return this._dataDeNascimento;
  }

  public set dataDeNascimento(dataDeNascimento: Date) {
    this._dataDeNascimento = dataDeNascimento;
  }
}
