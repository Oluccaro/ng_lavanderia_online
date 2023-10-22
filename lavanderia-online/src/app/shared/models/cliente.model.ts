export class Cliente {
  private _id : number;
  private _nome : string;
  private _endereco : string;
  
  constructor(id : number, nome : string, endereco : string) {
    this._id = id;
    this._nome = nome;
    this._endereco = endereco;
  }
  
  public get id() : number {
    return this._id;
  }
  
  public set id(id : number) {
    this._id = id;
  }

  public get nome() : string {
    return this._nome;
  }
    
  public set nome(nome : string) {
    this._nome = nome;
  }
  
  public get endereco() : string {
    return this._endereco;
  }
  
  public set endereco(endereco : string) {
    this._endereco = endereco;
  }
  
}
