import { environment } from './../../environments/environment';
import { Aluno } from './../models/aluno';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  urlApiAluno = `${environment.urlApiBase}/aluno`
  constructor(private http: HttpClient) { }

  listarAlunos() {
    return this.http.get<Aluno[]>(`${environment.urlApiBase}/aluno`);
  }

  getAlunoById(id: number) {
    return this.http.get<Aluno>(`${environment.urlApiBase}/aluno/${id}`);
  }

  addAluno(aluno: Aluno){

    return this.http.post<Aluno>(this.urlApiAluno, aluno);

  }
}
