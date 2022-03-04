import { ViaCepModel } from './../../models/via-cep-model';
import { ViaCepApiService } from './../../services/via-cep-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.scss']
})
export class FormContatoComponent implements OnInit {

  formContato: ViaCepModel ={};
  showForm: boolean = false;

  constructor(private cepService: ViaCepApiService) { }

  ngOnInit(): void {
    this.getViaCep('89021000');
  }

  getViaCEP(cep: any){
    this.cepService
      .getCep(cep)
      .subscribe(
        (response) =>{
          console.log(response);
        }
      );
  }

}
