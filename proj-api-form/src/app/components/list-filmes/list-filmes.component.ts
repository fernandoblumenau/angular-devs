import { FilmesService } from './../../services/filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-filmes',
  templateUrl: './list-filmes.component.html',
  styleUrls: ['./list-filmes.component.scss']
})
export class ListFilmesComponent implements OnInit {

  constructor(private FilmesService: FilmesService) { }

  ngOnInit(): void {
    this.FilmesService.getListFilmes();
  }

}
