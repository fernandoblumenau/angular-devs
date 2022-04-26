import { Categoria } from './categoria';
export class Nota {
  Idnota?: number;
  tituloNota?: string;
  textoAnotacao?: string;
  categoria: Categoria = new Categoria({});

  constructor(obj: Partial<Nota>){
    Object.assign(this,obj)
  }
}
