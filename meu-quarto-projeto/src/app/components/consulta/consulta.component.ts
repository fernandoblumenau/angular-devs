import { ViaIbgeMunicipiosService } from './../../services/via-ibge-municipios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  constructor(private ibgeService: ViaIbgeMunicipiosService) { }

  cidades$ = new

  ngOnInit(): void {
    this.loadMuniciopsByUF('SC');

  }


loadMuniciopsByUF(uf: string){
  this.ibgeService
      .getCidadeByUF(uf)
      .subscribe(
        (response)=>{
          console.log(response);
        }
      );
}

}
