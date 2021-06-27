import { item } from "./modelItem";

export class lista{
  private nombre: string
  private tag: Array<number>
  private categorias: Array<string> = new Array<string> ()
  private items: Array<item> = new Array<item>()

  //temporal
  item1: item = new item ("Soy el item 1 de la lista")
  item2: item = new item ("Soy el item 2 de la lista")

  public constructor(nombre: string, tag: Array<number>){
    this.nombre=nombre;
    this.tag=tag;
    this.categorias.push("Sin categoria");

    this.items.push(this.item1)
    this.items.push(this.item2)
  }

  public obtenerNombre(){
    return this.nombre;
  }

  public obtenerTags(){
    return this.tag;
  }

  public obtenerCategorias(){
    return this.categorias;
  }

  public nuevoItem(item: item){
    this.items.push(item)
  }

  public obtenerItems(){
    return this.items
  }

  public tieneTag(val: number): boolean{ //para verificar si la lista tiene asignado un tag
    for (let i = 0; i<this.tag.length; i++){
      if (this.tag[i]==val) return true;
      // else continue;
    }
    return false
  }
}
