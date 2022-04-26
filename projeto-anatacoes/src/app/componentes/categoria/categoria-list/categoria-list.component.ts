import { Categoria } from './../../../models/categoria';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  listaCategoria = new Observable<Categoria[]>();

  constructor(private service: CategoriaService, private router: Router) { }


  ngOnInit(): void {
    this.list();
  }

list(){
  this.listaCategoria=this.service.getAll();
}

delete(id?: number){
  this.service.delete(id||0)
  .subscribe((resp)=>resp==true ? this.list() : '');
}

toggleAtivo(id?: number){
  if(!id){
    return;
  }

  this.service.toggleAtivo(id || 0)
  .subscribe((resp)=>resp==true ? this.list() : '');
}

}
