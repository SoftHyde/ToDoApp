import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ListasService } from './Services/listas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  nombreLibre=true;
  @ViewChild("nameListText") nameListText!: ElementRef;

  public constructor(public listaService:ListasService, private renderer:Renderer2){
  }

  cambioNombreLista(){
    var texto: string = this.nameListText.nativeElement.value;
    this.nombreLibre = this.listaService.verificarNombreLista(texto.toLowerCase().trim())
    if (this.nombreLibre==false){
      this.renderer.addClass(this.nameListText.nativeElement,"is-invalid")
    }
    else{
      this.renderer.removeClass(this.nameListText.nativeElement,"is-invalid")
    }
  }
}
