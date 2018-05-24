import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrearboletinComponent } from './crearboletin/crearboletin.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const dashboardRoutes: Routes = [
    {
    path: 'dashboard',
    component: DashboardComponent, data: {titulo: 'Dashboard'},
    canActivate: [LoginGuardGuard],
    children: [
    {path: 'crearboletin', component: CrearboletinComponent, data: {titulo: 'Crear Boletines'}},
    {path: 'register', component: RegisterComponent, data: {titulo: 'Registrar Usuarios'}},
    {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Configuración'}},
    {path: 'profile', component: ProfileComponent, data: {titulo: 'Mi perfil'}},
    {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
    {path: 'rxjs', component: RxjsComponent, data: {titulo: 'RXJS'}},
    // Mantenimientos
    {path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimiento de usuarios'}},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
}
];
export const DASHBOARD_ROUTES = RouterModule.forChild( dashboardRoutes );
