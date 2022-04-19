import { Aluno } from './../models/aluno';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {



  constructor(private http: HttpClient) { }

  getAlunos(){
    const url =`${environment.urlApiAluno}/`;
    return this.http.get<Aluno[]>(url);
  }
}

