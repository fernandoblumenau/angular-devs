import { AnotacaoService } from './../../../services/anotacao.service';
import { Nota } from './../../../models/nota';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-anotacoes-modal-delete',
  templateUrl: './anotacoes-modal-delete.component.html',
  styleUrls: ['./anotacoes-modal-delete.component.scss']
})
export class AnotacoesModalDeleteComponent implements OnInit {

  @Input()
  notaDel = new Nota({});

  @Input()
  statusDelete = new Subject<boolean>();

  constructor(private service: AnotacaoService) { }

  ngOnInit(): void {
  }

  cancelDelete() {
    this.notaDel = new Nota({});
  }

  delete(id?: number) {
    if(!id) {
      return;
    }

    this.service
        .delete(id || 0)
        .subscribe(
          resp => {
            if(resp) {
              console.log('Registro excluído!');
              this.notaDel = new Nota({});
              this.statusDelete.next(true);
            } else {
              this.notaDel = new Nota({});
              this.statusDelete.next(false);
            }
          }
        );
  }

}
