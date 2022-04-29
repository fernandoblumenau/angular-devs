import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AnotacoesListComponent } from './componentes/anotacoes/anotacoes-list/anotacoes-list.component';
import { AnotacoesAddComponent } from './componentes/anotacoes/anotacoes-add/anotacoes-add.component';
import { CategoriaListComponent } from './componentes/categoria/categoria-list/categoria-list.component';
import { CategoriaAddComponent } from './componentes/categoria/categoria-add/categoria-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AnotacoesListComponent,
    AnotacoesAddComponent,
    CategoriaListComponent,
    CategoriaAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
