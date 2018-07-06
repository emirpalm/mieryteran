import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../services/scritpt/script.service';

declare function init_plugins();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public _scriptService: ScriptService) { }

  ngOnInit() {
    init_plugins();
    this._scriptService.load('footable').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

}
