import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) {
        translate.setDefaultLang('es');
  }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
   }

}
