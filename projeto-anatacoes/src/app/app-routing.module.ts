import { CategoriaAddComponent } from './componentes/categoria/categoria-add/categoria-add.component';
import { AnatocoesAddComponent } from './componentes/anotacoes/anatocoes-add/anatocoes-add.component';
import { AnatocoesListComponent } from './componentes/anotacoes/anatocoes-list/anatocoes-list.component';
import { CategoriaListComponent } from './componentes/categoria/categoria-list/categoria-list.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'categorias', component: CategoriaListComponent},
  {path: 'categoria-add', component: CategoriaAddComponent},
  {path: 'notas', component: AnatocoesListComponent},
  {path: 'nota-add', component: AnatocoesAddComponent},
  {path: 'nota-update/:id', component: AnatocoesAddComponent},
  {path: 'categoria-update/:id', component: CategoriaAddComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
