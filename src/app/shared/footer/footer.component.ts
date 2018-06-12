import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

  ngOnInit() {
  }

}
