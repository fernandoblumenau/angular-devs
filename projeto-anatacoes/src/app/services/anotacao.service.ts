import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Nota } from './../models/nota';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnotacaoService {

  urlApi: string =`${environment.urlAPI}/notas`;
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Nota[]>(this.urlApi);
  }

  getById(id: number){
    return this.http.get<Nota>(`${this.urlApi}/${id}`);
  }

  save(nota: Nota){
    return this.http.post<Nota>(this.urlApi, nota);
  }

  updade(nota: Nota){
  return this.http.put<Nota>(this.urlApi, nota);
  }

  delete(id: number){
  return this.http.delete(`${this.urlApi}/${id}`)
  }
}
