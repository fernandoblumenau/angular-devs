import { Aluno } from './../../../models/aluno';
import { Pessoa } from './../../../models/pessoa';
import { AlunoService } from './../../../services/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-save',
  templateUrl: './aluno-save.component.html',
  styleUrls: ['./aluno-save.component.scss']
})
export class AlunoSaveComponent implements OnInit {

  formAluno: Aluno = new Aluno({pessoa: new Pessoa({})});
  okInsert: boolean=false;

  constructor(private AlunoService: AlunoService) { }

  ngOnInit(): void {
  }


  addAluno(){
    this.AlunoService
        .addAluno(this.formAluno)
        .subscribe(
          (aluno)=>{
            if(!(typeof aluno.id == 'undefined' )&&
                aluno.id  >0 ){
                  this.okInsert =true;

                  setTimeout(() => {
                    this.okInsert=false;
                    this.formAluno =new Aluno({ano: 0, pessoa: {sexo:''}});
                  }, 3000);
                }
          }
        );
  }
}
