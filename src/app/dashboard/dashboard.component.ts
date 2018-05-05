import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function init_plugins();
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();

  }

}
