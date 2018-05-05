import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DASHBOARD_ROUTES } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { CrearboletinComponent } from './crearboletin/crearboletin.component';

import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        DashboardComponent,
        CrearboletinComponent

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
