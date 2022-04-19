import { PessoaListComponent } from './components/pessoa/pessoa-list/pessoa-list.component';
import { PessoaSaveComponent } from './components/pessoa/pessoa-save/pessoa-save.component';
import { AlunoListComponent } from './components/aluno/aluno-list/aluno-list.component';
import { AlunoSaveComponent } from './components/aluno/aluno-save/aluno-save.component';
import { ProfessorListComponent } from './components/professor/professor-list/professor-list.component';
import { ProfessorSaveComponent } from './components/professor/professor-save/professor-save.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PessoaListComponent,
    PessoaSaveComponent,
    AlunoListComponent,
    AlunoSaveComponent,
    ProfessorListComponent,
    ProfessorSaveComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
