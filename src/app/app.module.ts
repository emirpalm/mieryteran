import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { APP_ROUTES } from './app.routes';
// Modulos
import { PagesModules } from './pages/pages.module';
import { DashboardModules } from './dashboard/dashboard.module';

// Servicios
import { ServiceModule } from './services/service.module';

import { AppComponent } from './app.component';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModules,
    DashboardModules,
    HttpClientModule,
    ServiceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
