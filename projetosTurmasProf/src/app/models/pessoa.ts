export class Pessoa {
  id?: number;
  nome?: string;
  idade?: number;
  endereco?: string;
  sexo?: string;

  constructor(obj: Partial<Pessoa>){
    Object.assign(this, obj);

  }
}


