export class Aluno {


  id?:number;
  ano?: number;
  turma?:String;
  pessoa?:Pessoa;

  constructor(obj: Partial<Aluno>){
    Object.assign(this, obj);

}
}

export class Pessoa{
  id?:number;
  nome?:String;
  idade?:number;
  endereco?:String;
  sexo?:String;

  constructor(obj: Partial<Pessoa>){
    Object.assign(this, obj);

}
}
