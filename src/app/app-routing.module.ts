import { ProductosComponent } from './productos/productos.component';
import { PagadoresComponent } from './pagadores/pagadores.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:PagadoresComponent},
  {path:'productos',component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
