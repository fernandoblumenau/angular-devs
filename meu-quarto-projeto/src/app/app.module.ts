import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentThreeColumnsComponent } from './components/content-three-columns/content-three-columns.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContentFormComponent } from './components/content-form/content-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ContentThreeColumnsComponent,
    ConsultaComponent,
    ContentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
