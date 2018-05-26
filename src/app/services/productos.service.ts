import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
Http
@Injectable()
export class ProductosService {

  productos: any[] =[];
  productos_filtrado: any [] = [];
  cargando: boolean = true;

  constructor( private http: Http) { 
  
  this.cargar_productos();
  }

  public cargar_producto(cod: string){
    return this.http.get(`https://pageweb-angularhtml.firebaseio.com/productos/${cod}.json`)
  }

  public buscar_producto(termino: string){ //termino para buscar nuestrps productos
    console.log("Buscando Productos")
    console.log(this.productos.length)

    if (this.productos.length === 0) {
      this.cargar_productos().then (()=>{
        // que termino la carga
        this.filtrar_productos(termino);
      });
    }else{
      this.filtrar_productos(termino);
    }
  }

  private filtrar_productos(termino: string){
    this.productos_filtrado =[];
    termino = termino.toLowerCase();

    this.productos.forEach(prod =>{

    if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0 ) {
      this.productos_filtrado.push(prod)
      console.log(prod)
    }

      // console.log(prod)
    })
  }

  public cargar_productos(){
    this.cargando = true;

    let promesa = new Promise((resolve, reject)=>{

      this.http.get('https://pageweb-angularhtml.firebaseio.com/productos_idx.json')
              .subscribe( respuesta => {
                
                setTimeout(() => {
                  console.log(respuesta.json());
                  this.cargando = false;
                  this.productos = respuesta.json();
                  resolve();
                }, 500);
                
              });
    });

    return promesa;

  }

}
