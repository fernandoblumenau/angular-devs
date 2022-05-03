import { Nota } from './../models/nota';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {

  urlApi: string = `${environment.urlAPI}/notas`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Nota[]>(this.urlApi);
  }

  getById(id: number) {
    return this.http.get<Nota>(`${this.urlApi}/${id}`);
  }

  save(nota: Nota) {
    if(nota.idNota &&
      nota.idNota>0){
      return this.update(nota);
    }
    return this.http.post<Nota>(this.urlApi, Nota);
  }

  update(Nota: Nota) {
    return this.http.put<Nota>(this.urlApi, Nota);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.urlApi}/${id}`);
  }
}
