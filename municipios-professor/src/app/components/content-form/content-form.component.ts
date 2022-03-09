import { MunicipiosModel } from './../../models/municipios.model';
import { ApiIbgeMunicipiosService } from './../../services/api-ibge-municipios.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent implements OnInit {

  cidades$ = new Observable<MunicipiosModel[]>();

  constructor(private ibgeService: ApiIbgeMunicipiosService) { }

  ngOnInit(): void {

  }

  loadMunicipiosByUF(event: any) {
    const uf = (event.target as HTMLSelectElement)?.value;
    if(uf){
      this.cidades$ = this.ibgeService.getCidadesByUF(uf);
      this.ibgeService
          .getCidadesByUF(uf)
          .subscribe(
           (response) => {
             console.log(response);
           }
         );
    }
  }
}
