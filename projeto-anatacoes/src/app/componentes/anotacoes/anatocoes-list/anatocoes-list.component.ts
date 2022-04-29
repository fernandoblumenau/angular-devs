import { Router } from '@angular/router';
import { AnotacaoService } from './../../../services/anotacao.service';
import { Nota } from './../../../models/nota';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anatocoes-list',
  templateUrl: './anatocoes-list.component.html',
  styleUrls: ['./anatocoes-list.component.scss']
})
export class AnatocoesListComponent implements OnInit {

  listaNotas$ = new Observable<Nota[]>()

  notaSaveCurrent = new Nota({});

  criando$ = new Subject<boolean>();
  criado$ = new Subject<boolean>();

  constructor(private service: AnotacaoService) { }

  ngOnInit(): void {

  }



  getlist(){
  this.listaNotas$=this.service.getAll();
  }

  delete(id?:number){

  }

    newNota(){

   }

    update(id?:number){

    }


}
