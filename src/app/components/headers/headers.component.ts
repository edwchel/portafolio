import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html'
})
export class HeadersComponent {

  constructor(public _is: InformacionService){

  }

}
