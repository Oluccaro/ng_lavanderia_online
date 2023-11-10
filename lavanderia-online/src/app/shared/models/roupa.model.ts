export class Roupa {
  private _id: number;
  private _preco: number;
  private _tipo: string;
  private _material?: string;
  private _prazo: string;
  private _descricao: string;

  constructor(
    id: number,
    preco: number,
    tipo: string,
    prazo: string,
    descricao: string,
    material?: string
  ) {
    this._id = id;
    this._preco = preco;
    this._tipo = tipo;
    this._prazo = prazo;
    this._descricao = descricao;
    this._material = material;
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

  public get tipo(): string {
    return this._tipo;
  }

  public set tipo(tipo: string) {
    this._tipo = tipo;
  }

  public get material(): string | undefined {
    return this._material;
  }

  public set material(material: string | undefined) {
    this._material = material;
  }

  public get prazo(): string {
    return this._prazo;
  }

  public set prazo(prazo: string) {
    this._prazo = prazo;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(descricao: string) {
    this._descricao = descricao;
  }
}
