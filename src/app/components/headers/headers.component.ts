import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html'
})
export class HeadersComponent {

  constructor(public _is: InformacionService,
              private route: Router){
  }

  buscar_producto(termino: string){
    console.log(termino + ' buscar_producto')
    this.route.navigate(['buscar', termino])
  }

}
