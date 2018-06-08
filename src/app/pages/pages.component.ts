import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(private router: Router, private location: Location, private translate: TranslateService) {
      translate.setDefaultLang('en');
   }

  ngOnInit() {
      this.location.subscribe((ev: PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
      this.router.events.subscribe((ev: any) => {
          if (ev instanceof NavigationStart) {
              if (ev.url !== this.lastPoppedUrl) {
                  this.yScrollStack.push(window.scrollY);
              }
          } else if (ev instanceof NavigationEnd) {
              if (ev.url === this.lastPoppedUrl) {
                  this.lastPoppedUrl = undefined;
                  window.scrollTo(0, this.yScrollStack.pop());
              } else {
                  window.scrollTo(0, 0);
              }
          }
      });
  }
}
