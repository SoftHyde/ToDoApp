import { GestorService } from './../services/gestor.service';
import { Component, OnInit } from '@angular/core';
import { Pagador } from '../model/pagador';

@Component({
  selector: 'app-pagadores',
  templateUrl: './pagadores.component.html',
  styleUrls: ['./pagadores.component.css']
})
export class PagadoresComponent implements OnInit {

  nombrePag: string = "";
  montoPag: number = parseInt("");

  constructor(private gestorService:GestorService) { }

  obtenerListaPagadores(): Array<Pagador>{
    return this.gestorService.obtenerLista();
  }

  agregarPagador(){
    if (this.nombrePag.trim()!=""){
      var aux = new Pagador(this.nombrePag,this.montoPag)
      this.gestorService.agregarPagador(aux);
      this.nombrePag="";
      this.montoPag=parseInt("");
    }
  }

  eliminarPagador(nombre: string){
    this.gestorService.eliminarPagador(nombre);
  }

  ngOnInit(): void {
  }

}
