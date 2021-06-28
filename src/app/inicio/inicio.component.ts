import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @ViewChild("botonTag") botonTags!: ElementRef;
  tagsVisibles: boolean = false //Esto determina si el panel de tags esta expandido

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  cambioTags(): void{
    this.tagsVisibles=!this.tagsVisibles;
    if (this.tagsVisibles==true)  this.renderer.addClass(this.botonTags.nativeElement,"rotarBoton");
    else this.renderer.removeClass(this.botonTags.nativeElement,"rotarBoton");
  }

}
