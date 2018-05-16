
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, PortafolioComponent, PortafolioItemComponent } from './components/index.paginas';


const APP_ROUTES: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: PortafolioItemComponent },
    { path: '**', pathMatch: 'full' , redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});
