import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrearboletinComponent } from './crearboletin/crearboletin.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';

const dashboardRoutes: Routes = [
    {
    path: 'dashboard',
    component: DashboardComponent, data: {titulo: 'Dashboard'},
    children: [
    {path: 'crearboletin', component: CrearboletinComponent, data: {titulo: 'Crear Boletines'}},
    {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Configuración'}},
    {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
}
];
export const DASHBOARD_ROUTES = RouterModule.forChild( dashboardRoutes );
