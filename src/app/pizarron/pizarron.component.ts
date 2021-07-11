import { ListasService } from './../Services/listas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizarron',
  templateUrl: './pizarron.component.html',
  styleUrls: ['./pizarron.component.css']
})
export class PizarronComponent implements OnInit {

  constructor(public listaService:ListasService, private router: Router) { }

  ngOnInit(): void {
  }

  obtenerListas(){
    return this.listaService.obtenerAllListas();
  }

  obtenerTags(listaTag: Array<number>){
    return this.listaService.obtenerTag(listaTag);
  }

  abrirLista(nombreLista: string){
    let path = "/opened/" + nombreLista
    this.router.navigate([path])
  }

}
