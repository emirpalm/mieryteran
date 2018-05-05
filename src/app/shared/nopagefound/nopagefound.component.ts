import { Component, OnInit } from '@angular/core';
declare function init_404();
@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
styleUrls: ['./nopagefound.component.css']
})
export class NopagefoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_404();
  }

}
