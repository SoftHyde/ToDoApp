import { Injectable } from '@angular/core';
import { lista } from '../Model/modelList';
import { tag } from '../Model/modelTag';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  //declaro dos listas y 3 tags por defecto para trabajar
  tag1: tag = new tag(0,"hogar");
  tag2: tag = new tag(1,"facultad");
  tag3: tag = new tag(2,"cosas de la life");
  lista1: lista = new lista ("cosas de la casa", [0])
  lista2: lista = new lista ("tareas de la facu", [1,2])

  vectorListas: Array<lista> = new Array<lista> ()
  vectorTags: Array<tag> = new Array<tag>()
  vectorListasFiltradas: Array<lista> = new Array<lista> ()

  constructor() {
    this.vectorTags.push(this.tag1)
    this.vectorTags.push(this.tag2)
    this.vectorTags.push(this.tag3)

    this.vectorListas.push(this.lista1)
    this.vectorListas.push(this.lista2)
  }

  nuevoTag(nombre: string): void {
    var cant = this.vectorTags.length;
    var newTag = new tag(cant-1, nombre)
    this.vectorTags.push(newTag)
  }

  obtenerAllTags(): Array<tag>{
    return this.vectorTags
  }

  // obtenerTag(listaTag: Array<number>): Array<tag>{
  //   var tagsRetornar: Array<tag> = new Array<tag>()
  //   listaTag.forEach(value =>{
  //     tagsRetornar.push(this.vectorTags[value])
  //   })
  //   return tagsRetornar
  // }

  seleccionarTag(id: number){
    this.vectorTags[id].seleccionado=!this.vectorTags[id].seleccionado
  }

  cantidadTagsSeleccionados(){
    var contador=0;
    for (let i = 0; i < this.vectorTags.length; i++) {
      if (this.vectorTags[i].seleccionado==true) contador++;
    }
    return contador;
  }

  filtrarLista(){
    this.vectorListasFiltradas.splice(0,this.vectorListasFiltradas.length)
    var contador=0
    for (let j = 0; j<this.vectorListas.length; j++){
      for (let i = 0; i < this.vectorTags.length; i++) {
        if (this.vectorTags[i].seleccionado==true && this.vectorListas[j].tieneTag(this.vectorTags[i].id)==true){
          contador++;
        }
      }
      if (contador==this.cantidadTagsSeleccionados()) this.vectorListasFiltradas.push(this.vectorListas[j])
      contador=0;
    }
  }

  nuevaLista(nombreLista: string, tags: Array<number>): void {
    if (tags.length<=this.vectorTags.length){
      var newList = new lista(nombreLista, tags);
      this.vectorListas.push(newList)
    }
    else console.log("Hay probemas con los tags")
  }

  obtenerAllListas(){
    if (this.cantidadTagsSeleccionados()==0)  return this.vectorListas;
    else return this.vectorListasFiltradas
  }

}
