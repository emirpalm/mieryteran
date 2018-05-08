import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
// Fin componentes

// RUTAS
import { APP_ROUTES } from './app.routes';
// Fin rUTAS

// Modulos
import { PagesModules } from './pages/pages.module';
import { DashboardModules } from './dashboard/dashboard.module';
// FIn modulos

// paginas login y pagenofound
import { LoginComponent } from './login/login/login.component';
// fin paginas login y pagenofound

// Servicios
import { ServiceModule } from './services/service.module';
// Fin Servicios

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModules,
    DashboardModules,
    ServiceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
