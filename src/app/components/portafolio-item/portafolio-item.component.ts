import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent implements OnInit {

  producto:any =undefined;
  cod: any= undefined;
  constructor(private route: ActivatedRoute,
              private _ps: ProductosService) {
    
  route.params.subscribe(parametros => {
    console.log(parametros);
    console.log(parametros['id'])
    _ps.cargar_producto(parametros['id'])
          .subscribe(respuesta =>{
          
          this.cod = parametros['id'];
          // console.log(respuesta.json())
          this.producto = respuesta.json();
          console.log(this.producto)

    })
  })
  
}
  
  ngOnInit() {
  }


}