import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrearboletinComponent } from './crearboletin/crearboletin.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const dashboardRoutes: Routes = [
    {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
    {path: 'crearboletin', component: CrearboletinComponent},
    {path: 'account-settings', component: AccountSettingsComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
}
];
export const DASHBOARD_ROUTES = RouterModule.forChild( dashboardRoutes );
