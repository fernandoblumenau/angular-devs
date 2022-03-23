import { ApiIbgeService } from './../../services/api-ibge.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Regiao } from 'src/app/models/regiao';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {

  constructor(private ibgeService: ApiIbgeService) { }

  ngOnInit(): void {
  }

  regiao$ = new Observable<Regiao>();

  loadRegiaoById(event: any) {
    const regiao = (event.target as HTMLSelectElement)?.value;
    if(regiao){
      this.regiao$ = this.ibgeService.getRegiao(regiao);
      this.ibgeService
          .getRegiao(regiao)
          .subscribe(
           (response) => {
             console.log(response);
           }
         );
    }
  }


}
