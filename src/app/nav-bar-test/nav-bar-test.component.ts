import { Demo } from "./../file-upload-component/file-upload-component.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar-test",
  templateUrl: "./nav-bar-test.component.html",
  styleUrls: ["./nav-bar-test.component.css"]
})
export class NavBarTestComponent implements OnInit {
  test: Testing;
  O_name: any;
  O_Age: any;
  O_DOB: any;

  name2 = "muthu";

  constructor() {}

  ngOnInit() {
    // console.log(this.name2.localeCompare('muthU', "en-gb"));
  }

  name(value) {
    this.O_name = Object.assign({ name: value });
    this.test = Object.assign(this.O_name, this.test);
    console.log(this.test);
  }
  age(value) {
    this.O_Age = Object.assign({ age: value });
    this.test = Object.assign(this.O_Age, this.test);
    console.log(this.test);
  }
}
export class Testing {
  name?: string;
  age?: number;
  DOB?: string;
  Address?: string;
  Phone?: number;
  Email?: string;
}
