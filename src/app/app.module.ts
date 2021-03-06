import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioItemComponent } from './components/portafolio-item/portafolio-item.component';

import { APP_ROUTING } from './app.routes';

import { InformacionService } from './services/informacion.service';
import { ProductosService } from './services/productos.service';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    InformacionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
