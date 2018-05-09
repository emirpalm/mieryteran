import { NgModule } from '@angular/core';

// Modulos Shared headerdash, sidebar y breadcrumbs
import { SharedModule } from '../shared/shared.module';
// Fin modulos Shared headerdash, sidebar y breadcrumbs


// Rutas
import { DASHBOARD_ROUTES } from './dashboard.routes';
// Fin Rutas

// Modulos dashboard
import { DashboardComponent } from './dashboard.component';
import { CrearboletinComponent } from './crearboletin/crearboletin.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
// Fin modulos

import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        DashboardComponent,
        CrearboletinComponent,
        AccountSettingsComponent

    ],
    exports: [
        CrearboletinComponent
    ],
    imports: [
        SharedModule,
        DASHBOARD_ROUTES,
        FormsModule
    ]

    })
    export class DashboardModules {}
