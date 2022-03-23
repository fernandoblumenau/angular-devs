import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regiao } from '../models/regiao';

@Injectable({
  providedIn: 'root'
})
export class ApiIbgeService {


  constructor(private http: HttpClient) { }

  getRegiao(idRegiao: string){
    const urlGet = `${environment.urlApi}${idRegiao}/json`;
    return this.http.get<Regiao>(urlGet);
  }


}
