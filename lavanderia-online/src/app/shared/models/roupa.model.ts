export class Roupa {
  constructor(
    public id_peca?: number,
    public preco?: number,
    public prazo?: number,
    public descricao?: string,
    public imagem?: string,
    public quantidade: number = 0
  ) {
    this.id_peca = this.gerarId()
    this.imagem = this.gerarImagem()
  }

  public get getId_peca(): number {
    return this.id_peca!;
  }

  public set setId_peca(id_peca: number) {
    this.id_peca = id_peca;
  }

  private gerarId(): number{
    let id_peca = new Date();
    return id_peca.getTime();
  }

  public get getPreco(): number {
    return this.preco!;
  }

  public set setPreco(preco: number) {
    this.preco! = preco;
  }

  public get getImagem(): string {
    return this.imagem!;
  }

  public set setImagem(imagem: string) {
    this.imagem! = imagem;
  }

  private gerarImagem(): string{
    let data = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII";
    return data;
  }

  public get getPrazo(): number {
    return this.prazo!;
  }

  public set setPrazo(prazo: number) {
    this.prazo! = prazo;
  }

  public get getDescricao(): string {
    return this.descricao!;
  }

  public set setDescricao(descricao: string) {
    this.descricao! = descricao;
  }

  public get getQuantidade(): number {
    return this.quantidade!;
  }

  public set setuantidade(quantidade: number) {
    this.quantidade! = quantidade;
  }
}
