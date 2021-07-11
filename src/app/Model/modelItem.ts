export class item{
  private nombre: string;
  // private listaPasos: Array<string>;
  // private fechaHora: Date;
  // private observ: string

  public constructor(nombre: string){
    this.nombre=nombre;
  }

  public obtenerNombre(){
    return this.nombre
  }
  // public obtenerPasos(){
  //   return this.listaPasos
  // }
  // public obtenerFecha(){
  //   return this.fechaHora
  // }
  // public obtenerObservacion(){
  //   return this.observ
  // }

}
