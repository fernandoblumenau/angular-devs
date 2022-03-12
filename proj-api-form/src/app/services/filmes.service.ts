import { Filme } from './../models/filme';
import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  filmes$: Observable<Filme[]>;


  constructor(private Firestore: Firestore) {
    const collect = collection(this.Firestore, 'filmes');
    this.filmes$ =collectionData(collect);
  }

  getListFilmes(){
    this.filmes$.subscribe(
      (ltFilmes)=>{
        console.log(ltFilmes);
      }
    )
    return this.filmes$;
  }
}
