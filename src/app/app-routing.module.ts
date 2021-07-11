import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import {ListaAbiertaComponent} from './lista-abierta/lista-abierta.component'

const routes: Routes = [
  { path: '', component: InicioComponent},
  {path:'opened/:name', component: ListaAbiertaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
