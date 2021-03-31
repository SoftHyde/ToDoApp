import { GestorService } from './services/gestor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagadoresComponent } from './pagadores/pagadores.component';
import { ProductosComponent } from './productos/productos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PagadoresComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GestorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
