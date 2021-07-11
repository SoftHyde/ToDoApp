import { ListasService } from './Services/listas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PizarronComponent } from './pizarron/pizarron.component';
import { TagsComponent } from './tags/tags.component';
import { ListaAbiertaComponent } from './lista-abierta/lista-abierta.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PizarronComponent,
    TagsComponent,
    ListaAbiertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ListasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

