import { Injectable } from '@angular/core';
import { Pagador } from '../model/pagador';

@Injectable({
  providedIn: 'root'
})
export class GestorService {

  private lista_pagadores: Array<Pagador> = new Array<Pagador>();

  obtenerLista(){
    return this.lista_pagadores;
  }

  agregarPagador(nuevo: Pagador){
    this.lista_pagadores.push(nuevo);
  }

  eliminarPagador(nombre:string){
    this.lista_pagadores = this.lista_pagadores.filter(val => val.nombre!=nombre)
  }



}
