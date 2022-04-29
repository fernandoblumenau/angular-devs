import { CategoriaAddComponent } from './componentes/categoria/categoria-add/categoria-add.component';
import { AnotacoesAddComponent } from './componentes/anotacoes/anotacoes-add/anotacoes-add.component';
import { AnotacoesListComponent } from './componentes/anotacoes/anotacoes-list/anotacoes-list.component';
import { CategoriaListComponent } from './componentes/categoria/categoria-list/categoria-list.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'categorias', component: CategoriaListComponent},
  {path: 'categoria-add', component: CategoriaAddComponent},
  {path: 'notas', component: AnotacoesListComponent},
  {path: 'nota-add', component: AnotacoesAddComponent},
  {path: 'nota-update/:id', component: AnotacoesAddComponent},
  {path: 'categoria-update/:id', component: CategoriaAddComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
