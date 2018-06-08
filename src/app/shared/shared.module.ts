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
import { PipesModule } from '../pipes/pipes.module';
// Fin Componentes Shared

// NG-TRANSLATE
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';




@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PipesModule,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
                      useFactory: HttpLoaderFactory,
                      deps: [HttpClient]
            }
          })
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
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

