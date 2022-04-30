import { AnotacaoService } from './../../../services/anotacao.service';
import { Nota } from './../../../models/nota';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotacoes-list',
  templateUrl: './anotacoes-list.component.html',
  styleUrls: ['./anotacoes-list.component.scss']
})
export class AnotacoesListComponent implements OnInit {

  // listaNotas$ = new Observable<Nota[]>();

  // notaSaveCurrent = new Nota({});
  // notaDel = new Nota({});

  // criando$ = new Subject<boolean>();
  // criado$ = new Subject<boolean>();
  constructor(private service: AnotacaoService) { }

  ngOnInit(): void {
    // this.getList();
    // this.criado$.subscribe((resp) => {
    //   this.criando$.next(resp);
    //   this.getList();
    // });
  }

  // getList() {
  //   this.listaNotas$ = this.service.getAll();
  // }


  // deleteConfirm(nota?: Nota) {
  //   if(nota){
  //     this.notaDel = nota;
  //   }
  // }

  // cancelDelete(id?: number){
  //   if(!id){
  //     return
  //   }
  // }

  // delete(id?: number) {
  //   if(!id){
  //     return;
  //   }

  //   this.service
  //     .delete(id || 0)
  //     .subscribe(
  //       resp => {
  //         console.log('registro excluido');
  //         this.notaDel= new Nota({});
  //         this.getList();
  //       }
  //     );
  // }

  // newNota(){
  //   this.criando$.next(true);
  // }

  // update(id?: number) {

  // }
}
