import { NgModule } from '@angular/core';

// Modulos Shared headerdash, sidebar y breadcrumbs
import { SharedModule } from '../shared/shared.module';
// Fin modulos Shared headerdash, sidebar y breadcrumbs
import { CommonModule } from '@angular/common';

// Rutas
import { DASHBOARD_ROUTES } from './dashboard.routes';
// Fin Rutas

// Modulos dashboard
import { DashboardComponent } from './dashboard.component';
import { CrearboletinComponent } from './crearboletin/crearboletin.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
// Fin modulos

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RegisterComponent } from './register/register.component';
// Pipes Modulos
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
    declarations: [
        DashboardComponent,
        CrearboletinComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        RegisterComponent

    ],
    exports: [
        CrearboletinComponent
    ],
    imports: [
        SharedModule,
        DASHBOARD_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        PipesModule
    ]

    })
    export class DashboardModules {}
