import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MunicipiosModel } from '../model/municipios.model';

@Injectable({
  providedIn: 'root'
})
export class ViaIbgeMunicipiosService {

  constructor(private http: HttpClient) { }

  getCidadeByUF(uf:string){
    const url = `${environment.urlApiCidades}/${uf}/municipios`;
    return this.http.get<MunicipiosModel>(url);
  }
}
