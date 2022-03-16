import { PokemonList } from './../../models/pokemon/pokemon-list';
import { PokeApiService } from './../../services/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ResponseLink } from 'src/app/models/pokemon/response-link';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {


listPokemon$ = new Subject<ResponseLink[]>();
urlSpriteFront: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  constructor(private route: ActivatedRoute,
    private pokemonService: PokeApiService) { }

  ngOnInit(): void {
    this.pokemonService
        .getListPokemons(undefined, 0, 898)
        .subscribe(
          (response)=>{
            this.listPokemon$.next(response.results);
          }
       );
  }

}
