export class lista{
  private nombre: string
  private tag: Array<number>

  public constructor(nombre: string, tag: Array<number>){
    this.nombre=nombre;
    this.tag=tag;
  }

  public obtenerNombre(){
    return this.nombre;
  }

  public obtenerTags(){
    return this.tag;
  }

  public tieneTag(val: number): boolean{ //para verificar si la lista tiene asignado un tag
    for (let i = 0; i<this.tag.length; i++){
      if (this.tag[i]==val) return true;
      // else continue;
    }
    return false
  }
}
