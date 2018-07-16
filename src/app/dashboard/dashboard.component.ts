import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../services/scritpt/script.service';

declare function init_plugins();
declare function init_plugins2();
declare function init_plugins3();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    init_plugins2();
    init_plugins3();
  }

}
