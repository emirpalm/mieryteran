import { NgModule } from '@angular/core';
// Componentes Shared
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderdashComponent } from './headerdash/headerdash.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
// Fin Componentes Shared
import { CommonModule } from '@angular/common';




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
