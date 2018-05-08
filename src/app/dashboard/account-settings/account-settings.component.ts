import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    // tslint:disable-next-line:prefer-const
    let url = `assets/css/colors/${tema}.css`;
    document.getElementById('tema').setAttribute('href', url);

  }

  aplicarCheck(link: any) {
// tslint:disable-next-line:prefer-const
let selectors: any = document.getElementsByClassName('selector');
// tslint:disable-next-line:prefer-const
for(let ref of selectors) {
  ref.classList.remove('working');
}
link.classList.add('working');
  }

}
