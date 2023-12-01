import { Roupa } from "./roupa.model";

export class Pedido {
  constructor(
      public id?: number,
      public roupas?: Array<Roupa>,
      public status?: string,
      public dataPedido?: string,
      public dtEntregaPrevista?: string,
      public valor?: number,
      public idCliente?: number,
  ){
    this.id = this.gerarId();
    this.dataPedido = this.gerarData();
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

  public get getDataPedido(): string {
    return this.dataPedido!;
  }

  public get getDtEntregaPrevista(): string {
    return this.dtEntregaPrevista!;
  }
  
  public set setDtEntregaPrevista(dtEntregaPrevista: string) {
    this.dtEntregaPrevista! = dtEntregaPrevista;
  }

  public get getValor(): number {
    return this.valor!;
  }
  public set setValor(valor: number) {
    this.valor! = valor;
  }
  public get getIdCliente(): number {
    return this.idCliente!;
  }
  public set setIdCliente(idCliente: number) {
    this.idCliente! = idCliente;
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