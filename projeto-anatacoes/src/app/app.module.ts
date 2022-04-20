import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AnatocoesListComponent } from './componentes/anotacoes/anatocoes-list/anatocoes-list.component';
import { AnatocoesAddComponent } from './componentes/anotacoes/anatocoes-add/anatocoes-add.component';
import { CategoriaListComponent } from './componentes/categoria/categoria-list/categoria-list.component';
import { CategoriaAddComponent } from './componentes/categoria/categoria-add/categoria-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AnatocoesListComponent,
    AnatocoesAddComponent,
    CategoriaListComponent,
    CategoriaAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
