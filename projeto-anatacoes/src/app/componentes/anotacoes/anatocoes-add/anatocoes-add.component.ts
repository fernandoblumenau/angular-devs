import { CategoriaService } from './../../../services/categoria.service';
import { AnotacaoService } from './../../../services/anotacao.service';
import { Categoria } from './../../../models/categoria';
import { observable, Subject, Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anatocoes-add',
  templateUrl: './anatocoes-add.component.html',
  styleUrls: ['./anatocoes-add.component.scss']
})
export class AnatocoesAddComponent implements OnInit {

  @Input()
  status = new Subject<boolean>();

  @Input()
  notaInsert  = new Subject<boolean>();

  categoriaList = new Observable<Categoria[]>();


  constructor(private notaService: AnotacaoService,
    private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaList;


  }

}
