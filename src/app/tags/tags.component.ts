import { Component, OnInit } from '@angular/core';
import { ListasService } from '../Services/listas.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor(public listaService:ListasService) { }

  ngOnInit(): void {
  }

  obtenerTags(){
    return this.listaService.obtenerAllTags();
  }

  seleccionarTag(id: number): void{
    this.listaService.seleccionarTag(id);
    this.listaService.filtrarLista();
  }

}
