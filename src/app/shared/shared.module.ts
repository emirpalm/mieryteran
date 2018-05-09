import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
// Componentes Shared
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderdashComponent } from './headerdash/headerdash.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
// Fin Componentes Shared




@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
declarations: [
    NopagefoundComponent,
    HeaderComponent,
    FooterComponent,
    HeaderdashComponent,
    SidebarComponent,
    BreadcrumbsComponent
],
exports: [
    NopagefoundComponent,
    HeaderComponent,
    FooterComponent,
    HeaderdashComponent,
    SidebarComponent,
    BreadcrumbsComponent
 ]

})

export class SharedModule {}
