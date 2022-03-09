import { CidadeIbge } from './../models/cidade-ibge';
import { EstadoIbge } from './../models/estado-ibge';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiIbgeService {

  constructor(private http: HttpClient) { }

  geListtUF(){
    const urlGet = `${environment.urlApiIBGE}/estados`;
    return this.http.get<EstadoIbge[]>(urlGet);
  }

  getListCidadesByUF(uf:string){
    const urlGet = `${environment.urlApiIBGE}/estados/${uf}/municipios`;
    return this.http.get<CidadeIbge[]>(urlGet);
  }


}
