import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info: any = {};
  cargada: boolean = false;
  cargada_personal_firebase: boolean = false;
  equipo:any [] =[];

  constructor(public http:Http) {

    this.carga_info();
    this.carga_personal_firebase();

   }

   public carga_info(){
    this.http.get("assets/data/info.pagina.json").subscribe(
      data => {
        // console.log(data.json());
        this.cargada = true;
        this.info = data.json();
      })
   }

   public carga_personal_firebase(){
    this.http.get("https://pageweb-angularhtml.firebaseio.com/equipo.json").subscribe(
      data => {
        console.log(data.json());
        this.cargada_personal_firebase = true;
        this.equipo = data.json();
      })
   }

}
