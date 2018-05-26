import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino: string = undefined;
  constructor(public _ps: ProductosService,
              private route: ActivatedRoute) {
  
  route.params.subscribe(parametros => {

  this.termino = parametros['termino'];
  console.log(this.termino + ' rutas');

  _ps.buscar_producto(this.termino);

  });
}

  ngOnInit() {
  }

}
