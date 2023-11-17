export class Pedido {
    constructor(
        public id?: number,
        public item?: string,
        public status?: string,
        public data?: string,
        public valor?: number
    ){
    }

  public dataFormatada(): string {
    //let data = new Date(this.data ? this.data : '');
    return "I";
  }
}
