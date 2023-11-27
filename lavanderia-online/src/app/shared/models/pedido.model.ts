import { Roupa } from "./roupa.model";

export class Pedido {
  constructor(
      public id?: number,
      public roupas?: Array<Roupa>,
      public status?: string,
      public data?: string,
      public data_prevista?: string,
      public valor?: number,
  ){
    this.id = this.gerarId();
    this.data = this.gerarData();
  }

  public get getId(): number {
    return this.id!;
  }

  public get getRoupas(): Array<Roupa> {
    return this.roupas!;
  }

  public set setRoupas(roupas: Array<Roupa>) {
    this.roupas! = roupas;
  }

  public get getStatus(): string {
    return this.status!;
  }

  public set setStatus(status: string) {
    this.status! = status;
  }

  public get getData(): string {
    return this.data!;
  }

  public get getDataPrevista(): string {
    return this.data_prevista!;
  }
  
  public set setDataPrevista(data_prevista: string) {
    this.data_prevista! = data_prevista;
  }

  public get getValor(): number {
    return this.valor!;
  }
  public set setValor(valor: number) {
    this.valor! = valor;
  }

  private gerarId(): number{
    let id = new Date();
    return id.getTime();
  }

  private gerarData(): string{
    let data = new Date();
    return data.toString();
  }

}