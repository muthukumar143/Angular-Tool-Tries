import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date-test",
  templateUrl: "./date-test.component.html",
  styleUrls: ["./date-test.component.css"]
})
export class DateTestComponent implements OnInit {
  today = new Date();
  twoDaysAfter = new Date();

  constructor() {}

  ngOnInit() {
    this.twoDaysAfter.setDate(this.today.getDate() + 2);
    console.log(this.today > this.twoDaysAfter);
    console.log(this.today < this.twoDaysAfter);
    console.log(this.today === this.twoDaysAfter);
  }
}
