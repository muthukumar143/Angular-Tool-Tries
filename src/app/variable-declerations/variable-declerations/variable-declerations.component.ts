import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable-declerations',
  templateUrl: './variable-declerations.component.html',
  styleUrls: ['./variable-declerations.component.css']
})
export class VariableDeclerationsComponent implements OnInit {

  constructor() {
    enum Color {Red = 1, Green, Blue}
    const c: Color = Color.Green;
    console.log(typeof c);
  }

  ngOnInit() {
  }

  click() {

  }

}
