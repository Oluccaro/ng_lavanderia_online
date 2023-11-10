export class Pedido {
    constructor(
        public id: number,
        public item: string,
        public status: string,
        public data: Date,
        public valor: number
    ){}
}
