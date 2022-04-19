import { AlunoService } from './../../services/aluno.service';
import { Aluno } from './../../models/aluno';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  alunos$=new Observable<Aluno[]>();

  constructor(private alunoService:AlunoService) { }

  ngOnInit(): void {
    this.loadAlunos();
  }

loadAlunos(){
  this.alunos$=this.alunoService.getAlunos();
}

}
