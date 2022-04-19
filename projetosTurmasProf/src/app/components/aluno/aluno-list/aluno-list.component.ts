import { Aluno } from './../../../models/aluno';
import { AlunoService } from './../../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  listaAlunos$ = new Observable<Aluno[]>();

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.listarAlunos();
  }

  listarAlunos() {
    this.listaAlunos$ = this.alunoService.listarAlunos();
  }

  delete(id?: number) {
    //let ret = this.alunoService.delete(id);
    console.log(id);
  }

}
