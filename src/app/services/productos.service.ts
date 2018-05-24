import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
Http
@Injectable()
export class ProductosService {

  productos: any[] =[];
  cargando: boolean = true;

  constructor( private http: Http) { 
  
  this.cargar_productos();
  }

  public cargar_productos(){
    this.cargando = true;
    this.http.get('https://pageweb-angularhtml.firebaseio.com/productos_idx.json')
              .subscribe( respuesta => {
                console.log(respuesta.json());
                this.cargando = false;
              })
  }

}
