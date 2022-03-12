import { Filme } from './../models/filme';
import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  filmes$: Observable<Filme[]>;

  filmesCollection: AngularFirestoreCollection<Filme>;


  constructor(private Firestore: Firestore,
              private afs:AngularFirestore) {
    this.filmesCollection = this.afs.collection<Filme>('filmes');
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
addFilme(filme: Filme){
  this.filmesCollection.add(filme);
}

}
