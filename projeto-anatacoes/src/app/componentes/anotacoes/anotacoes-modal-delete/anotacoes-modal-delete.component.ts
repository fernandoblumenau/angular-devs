import { Subject, Observable } from 'rxjs';
import { AnotacaoService } from './../../../services/anotacao.service';
import { Nota } from './../../../models/nota';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotacoes-modal-delete',
  templateUrl: './anotacoes-modal-delete.component.html',
  styleUrls: ['./anotacoes-modal-delete.component.scss']
})
export class AnotacoesModalDeleteComponent implements OnInit {

  @Input()
  notaDel = new Nota({});

  @Input()
  statusDel = new Subject<boolean>();

  criando$ = new Subject<boolean>();
  criado$ = new Subject<boolean>();

  notaSaveCurrent = new Nota({});
  listaNotas$ = new Observable<Nota[]>();

  constructor(private service: AnotacaoService) { }

  ngOnInit(): void {
    this.getList();
    this.criado$.subscribe((resp) => {
      this.criando$.next(resp);
      this.getList();
    });
  }

  getList() {
    this.listaNotas$ = this.service.getAll();
  }



  deleteConfirm(nota?: Nota) {
    if(nota){
      this.notaDel = nota;
    }
  }

  cancelDelete(id?: number){
    if(!id){
      return
    }
  }


  delete(id?: number) {
    if(!id){
      return;
    }

    this.service
      .delete(id || 0)
      .subscribe(
        resp => {
          console.log('registro excluido');
          this.notaDel= new Nota({});
          this.getList();
        }
      );
  }


  newNota(){
    this.criando$.next(true);
  }

  update(id?: number) {

  }
}
