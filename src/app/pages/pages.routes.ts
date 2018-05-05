import {RouterModule, Routes} from '@angular/router';


import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BolsatrabajoComponent } from './bolsatrabajo/bolsatrabajo.component';
// tslint:disable-next-line:max-line-length
import { ImportacionesyexportacionesComponent } from './paginas-servicios/importacionesyexportaciones/importacionesyexportaciones.component';
import { LogisticaComponent } from './paginas-servicios/logistica/logistica.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
        {path: 'home', component: HomeComponent},
        {path: 'nosotros', component: NosotrosComponent},
        {path: 'servicios', component: ServiciosComponent},
        {path: 'contacto', component: ContactoComponent},
        {path: 'bolsatrabajo', component: BolsatrabajoComponent},
        {path: 'importacionesyexportaciones', component: ImportacionesyexportacionesComponent},
        {path: 'logistica', component: LogisticaComponent},
        {path: '', redirectTo: '/home', pathMatch: 'full'}
        ]
    }
    ];
    export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
