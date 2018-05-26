import { ProductosService } from '../../services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent implements OnInit {

  constructor(public _ps: ProductosService) { }

  ngOnInit() {
  }

}
