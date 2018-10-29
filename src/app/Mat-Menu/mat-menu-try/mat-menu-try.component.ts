import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-menu-try',
  templateUrl: './mat-menu-try.component.html',
  styleUrls: ['./mat-menu-try.component.css']
})
export class MatMenuTryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onclick(event) {
    console.log(event);
  }

}
