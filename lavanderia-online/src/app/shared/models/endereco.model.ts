export class Endereco {
  public cep?: string ;
  public logradouro?: string;
  public complemento?: string;
  public bairro?: string;
  public localidade?: string;
  public uf?: string;
  public numero?: string;

  constructor(
    cep?: string,
    logradouro?: string,
    complemento?: string,
    bairro?: string,
    localidade?: string,
    uf?: string,
    ibge?: number,
    gia?: number,
    ddd?: number, 
    siaf?: number,
    numero?: string
    ) {    
      this.uf = uf?.toUpperCase(); 
  }
}
