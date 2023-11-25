import { Usuario } from './usuario.model';

export class Funcionario extends Usuario {
  private _dataDeNascimento: string;

  constructor(
    id: number,
    login: string,
    nome: string,
    perfil: string,
    dataDeNascimento: string
  ) {
    super(id, login, nome, perfil);
    this._dataDeNascimento = dataDeNascimento;
  }

  public get dataDeNascimento(): string {
    return this._dataDeNascimento;
  }

  public set dataDeNascimento(dataDeNascimento: string) {
    this._dataDeNascimento = dataDeNascimento;
  }
}
