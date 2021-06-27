import { ListasService } from './../Services/listas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizarron',
  templateUrl: './pizarron.component.html',
  styleUrls: ['./pizarron.component.css']
})
export class PizarronComponent implements OnInit {

  constructor(public listaService:ListasService) { }

  ngOnInit(): void {
  }

  obtenerListas(){
    return this.listaService.obtenerAllListas();
  }

  obtenerTags(listaTag: Array<number>){
    return this.listaService.obtenerTag(listaTag);
  }

}
