export class ViaCepModel{

  cep?: string;
  logradouro?: string;
  comlemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
  numero?: number;

  constructor(object: Partial<ViaCepModel>){
    Object.assign(this, object);
  }

}
