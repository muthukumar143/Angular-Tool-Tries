import { paginations, returns } from "./../global_Paginator";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table-pagination",
  templateUrl: "./table-pagination.component.html",
  styleUrls: ["./table-pagination.component.css"]
})
export class TablePaginationComponent implements OnInit {
  count: number;
  pagesize = 7;
  nextState = false;
  prevState = false;
  firstState = true;
  lastState = false;
  emp: emp_model[] = [
    { name: "aaa", age: 1, gender: "male" },
    { name: "bbb", age: 2, gender: "male" },
    { name: "ccc", age: 3, gender: "male" },
    { name: "ddd", age: 4, gender: "male" },
    { name: "eee", age: 5, gender: "male" },
    { name: "fff", age: 6, gender: "male" },
    { name: "ggg", age: 7, gender: "male" },
    { name: "hhh", age: 8, gender: "male" },
    { name: "iii", age: 9, gender: "male" },
    { name: "jjj", age: 10, gender: "male" },
    { name: "kkk", age: 11, gender: "male" },
    { name: "lll", age: 12, gender: "male" },
    { name: "mmm", age: 13, gender: "male" },
    { name: "nnn", age: 14, gender: "male" },
    { name: "ooo", age: 15, gender: "male" },
    { name: "ppp", age: 16, gender: "male" },
    { name: "qqq", age: 17, gender: "male" },
    { name: "rrr", age: 18, gender: "male" },
    { name: "sss", age: 19, gender: "male" },
    { name: "ttt", age: 20, gender: "male" },
    { name: "uuu", age: 21, gender: "male" },
    { name: "vvv", age: 22, gender: "male" },
    { name: "www", age: 23, gender: "male" },
    { name: "xxx", age: 24, gender: "male" },
    { name: "yyy", age: 25, gender: "male" },
    { name: "zzz", age: 26, gender: "male" }
  ];

  emp1: emp_model[] = [];
  constructor(private _paginator: paginations) {}

  ngOnInit() {
    let tableMetaData = this._paginator.onStart(this.emp, this.pagesize);
    this.tablePaginationAssign(tableMetaData);
  }

  on_next() {
    let tableMetaData = this._paginator.nextPage(
      this.emp1,
      this.emp,
      this.pagesize
    );
    this.tablePaginationAssign(tableMetaData);
    // if (this.count !== this.emp.length - 1) {
    //   this.emp1 = [];
    // }
    // for (let i = 0; i < this.emp.length; i++) {
    //   if (this.count === this.emp.length - 1) {
    //     break;
    //   }
    //   if (i < this.pagesize && this.emp[this.count]) {
    //     this.count++;
    //     this.emp1.push(this.emp[this.count]);
    //     console.log(this.count);
    //   } else {
    //     break;
    //   }
    // }
  }
  on_previous() {
    let tableMetaData = this._paginator.previousPage(
      this.emp1,
      this.emp,
      this.pagesize
    );
    this.tablePaginationAssign(tableMetaData);
    // this.nextState = !this.nextState;
    // this.prevState =
    // if (this.count - table.rows.length >= 0) {
    //   this.count = this.count - table.rows.length - this.pagesize;
    //   this.emp1 = [];
    //   for (let i = 0; i < this.pagesize; i++) {
    //     this.count++;
    //     this.emp1.push(this.emp[this.count]);
    //   }
    // }
  }

  onFirst() {
    let tableMetaData = this._paginator.firstPage(this.emp, this.pagesize);
    this.tablePaginationAssign(tableMetaData);
  }

  onLast() {
    let tableMetaData = this._paginator.lastPage(this.emp, this.pagesize);
    this.tablePaginationAssign(tableMetaData);
  }

  tablePaginationAssign(tableMetaData: returns) {
    this.emp1 = tableMetaData.records;
    this.nextState = tableMetaData.nextState;
    this.prevState = tableMetaData.prevState;
    this.firstState = tableMetaData.firstState;
    this.lastState = tableMetaData.lastState;
  }
}
// tslint:disable-next-line:class-name
export class emp_model {
  name: string;
  age: number;
  gender: string;
}
