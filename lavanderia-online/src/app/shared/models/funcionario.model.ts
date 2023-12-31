import { Usuario } from './usuario.model';

export class Funcionario {
  private _id?: number;
  private _nome?: string;
  private _login?: string;
  private _perfil?: string;
  private _dtNascimento?: string;

  constructor(
    id?: number,
    nome?: string,
    login?: string,
    perfil?: string,
    dtNascimento?: string
  ) {
    this._id = id;
    this._nome = nome;
    this._login = login;
    this._perfil = perfil;
    this._dtNascimento = dtNascimento;
  }

  public get id(): number {
    return this._id!;
  }

  public set id(id: number) {
    this._id! = id;
  }

  public get nome(): string {
    return this._nome!;
  }

  public set nome(nome: string) {
    this._nome! = nome;
  }

  public get login(): string {
    return this._login!;
  }

  public set login(login: string) {
    this._login! = login;
  }

  public get perfil(): string {
    return this._perfil!;
  }

  public set perfil(perfil: string) {
    this._perfil! = perfil;
  }

  public get dtNascimento(): string {
    return this._dtNascimento!;
  }

  public set dtNascimento(dataDeNascimento: string) {
    this._dtNascimento! = dataDeNascimento;
  }
}
