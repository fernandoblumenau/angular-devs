import { ViaCep } from './../models/via-cep';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiViacepService {

  constructor(private http: HttpClient) { }

  getCEPByUF(cep:string){

    const urlGet = `${environment.urlApiViaCEP}/${cep}/json/`;
    return this.http.get<ViaCep>(urlGet);

  }
}
