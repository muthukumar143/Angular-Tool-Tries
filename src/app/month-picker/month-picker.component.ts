import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatDatepicker,
  DateAdapter,
  MAT_DATE_FORMATS
} from "@angular/material";
import { AppDateAdapter, APP_DATE_FORMATS } from "./datePicker";

@Component({
  selector: "app-month-picker",
  templateUrl: "./month-picker.component.html",
  styleUrls: ["./month-picker.component.css"],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class MonthPickerComponent implements OnInit {
  @ViewChild("picker") datepicker: MatDatepicker<"picker">;

  constructor() {}

  ngOnInit() {}

  selectedDate = new Date();

  onMonthSelected(event) {
    this.selectedDate = new Date(event);
    console.log(this.selectedDate);
    this.datepicker.close();
  }
}
