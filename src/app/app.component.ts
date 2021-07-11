import { Component, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { ListasService } from './Services/listas.service';
import {ActivatedRoute, Event, Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';

  nombreLibre=true;
  botonEnabled=false;
  textoNombre = "";
  tagsSelecc: Array<number> = [];

  @ViewChild("nameListText") nameListText!: ElementRef;
  @ViewChild("btnIzq") btnIzq!: ElementRef;
  @ViewChild("btnDer") btnDer!: ElementRef;

  public constructor(public listaService:ListasService, private renderer:Renderer2){
  }

  cambioNombreLista(){
    this.textoNombre = this.nameListText.nativeElement.value;
    this.textoNombre=this.textoNombre.toLowerCase().trim()
    if (this.textoNombre=="" || this.textoNombre==null) this.botonEnabled=false
    else {
      this.nombreLibre = this.listaService.verificarNombreLista(this.textoNombre)
    if (this.nombreLibre==false){
      this.renderer.addClass(this.nameListText.nativeElement,"is-invalid")
      this.botonEnabled=false;
    }
    else{
      this.renderer.removeClass(this.nameListText.nativeElement,"is-invalid")
      this.botonEnabled=true;
    }
    }
  }

  obtenerTags(){
    return this.listaService.obtenerAllTags();
  }

  seleccionarTag(id: number): void{
    if (this.tagsSelecc.find(elemTag => elemTag==id)==null)  this.tagsSelecc.push(id);
    else this.tagsSelecc=this.tagsSelecc.filter(elemTag => elemTag!=id)
    console.log(this.tagsSelecc)
  }

  tagEstaSeleccionado(id: number){
    if (this.tagsSelecc.find(elemTag => elemTag==id)!=null) return true
    else return false
  }

  limpiarModal(){
    this.tagsSelecc=[];
    this.nameListText.nativeElement.value="";
  }

  nuevaLista(){
    var aux = this.tagsSelecc
    this.tagsSelecc=[];
    this.nameListText.nativeElement.value="";
    this.listaService.nuevaLista(this.textoNombre,aux)
  }
}
