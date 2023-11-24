export class Roupa {
  private _id: number;
  private _preco: number;
  private _prazo: number;
  private _descricao: string;
  private _imagem: string;

  constructor(
    id: number,
    preco: number,
    prazo: number,
    descricao: string,
    imagem: string
  ) {
    this._id = id;
    this._preco = preco;
    this._prazo = prazo;
    this._descricao = descricao;
    this._imagem = imagem;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get preco(): number {
    return this._preco;
  }

  public set preco(preco: number) {
    this._preco = preco;
  }

  public get imagem(): string {
    return this._imagem;
  }

  public set imagem(imagem: string) {
    this._imagem = this.imagem;
  }

  public get prazo(): number {
    return this._prazo;
  }

  public set prazo(prazo: number) {
    this._prazo = prazo;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(descricao: string) {
    this._descricao = descricao;
  }
}
