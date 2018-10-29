import { Component, OnInit, ViewChildren } from "@angular/core";

@Component({
  selector: "app-plunkr-table-row-navigation",
  templateUrl: "./plunkr-table-row-navigation.component.html",
  styleUrls: ["./plunkr-table-row-navigation.component.css"]
})
export class PlunkrTableRowNavigationComponent implements OnInit {

  constructor() {
  }

  fields: any[] = [{
    name: '222'
  }, {
    name: '111'
  }, {
    name: '333'
  }];

  ngOnInit() {}
}
