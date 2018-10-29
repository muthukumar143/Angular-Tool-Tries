import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: "app-mat-table-column-freezing",
  templateUrl: "./mat-table-column-freezing.component.html",
  styleUrls: ["./mat-table-column-freezing.component.css"]
})
export class MatTableColumnFreezingComponent implements OnInit {
  emp: Employee[] = [
    {
      Employee_Code: "emp01",
      Employee_Name: "Anbu",
      Date_Of_Joining: "11/12/2015",
      Salary: 25000,
      Section: "IT",
      Company: "RmKV",
      Location: "Chennai"
    },
    {
      Employee_Code: "emp02",
      Employee_Name: "James",
      Date_Of_Joining: "23/05/2017",
      Salary: 15000,
      Section: "IT",
      Company: "RmKV",
      Location: "Trichy"
    },
    {
      Employee_Code: "emp03",
      Employee_Name: "Madhan",
      Date_Of_Joining: "14/02/2018",
      Salary: 10000,
      Section: "IT",
      Company: "RmKV",
      Location: "Coimbatore"
    },
    {
      Employee_Code: "emp04",
      Employee_Name: "Muthu",
      Date_Of_Joining: "14/03/2017",
      Salary: 10000,
      Section: "IT",
      Company: "RmKV",
      Location: "Chennai"
    },
    {
      Employee_Code: "emp05",
      Employee_Name: "Nandha",
      Date_Of_Joining: "23/11/2017",
      Salary: 15000,
      Section: "IT",
      Company: "RmKV",
      Location: "Chennai"
    },
    {
      Employee_Code: "emp06",
      Employee_Name: "Santhosh",
      Date_Of_Joining: "14/05/2018",
      Salary: 10000,
      Section: "IT",
      Company: "RmKV",
      Location: "T.Nagar"
    },
    {
      Employee_Code: "emp01",
      Employee_Name: "Anbu",
      Date_Of_Joining: "11/12/2015",
      Salary: 25000,
      Section: "IT",
      Company: "RmKV",
      Location: "Chennai"
    },
    {
      Employee_Code: "emp02",
      Employee_Name: "James",
      Date_Of_Joining: "23/05/2017",
      Salary: 15000,
      Section: "IT",
      Company: "RmKV",
      Location: "Trichy"
    },
    {
      Employee_Code: "emp03",
      Employee_Name: "Madhan",
      Date_Of_Joining: "14/02/2018",
      Salary: 10000,
      Section: "IT",
      Company: "RmKV",
      Location: "Coimbatore"
    },
    {
      Employee_Code: "emp04",
      Employee_Name: "Muthu",
      Date_Of_Joining: "14/03/2017",
      Salary: 10000,
      Section: "IT",
      Company: "RmKV",
      Location: "Chennai"
    },
    {
      Employee_Code: "emp05",
      Employee_Name: "Nandha",
      Date_Of_Joining: "23/11/2017",
      Salary: 15000,
      Section: "IT",
      Company: "RmKV",
      Location: "Chennai"
    },
    {
      Employee_Code: "emp06",
      Employee_Name: "Santhosh",
      Date_Of_Joining: "14/05/2018",
      Salary: 10000,
      Section: "IT",
      Company: "RmKV",
      Location: "T.Nagar"
    }
  ];

  table_columns: string[] = [
    "Date Of Joining",
    "Salary",
    "Section",
    "Company",
    "Location"
  ];

  table_mod: any[] = [];

  searchColumn = "Employee_Name";

  displayedColumns: string[] = ["Employee_Code", "Employee_Name"];

  displayedColumns1 = [
    "Employee_Code",
    "Employee_Name",
    "Date_Of_Joining",
    "Salary",
    "Section",
    "Company",
    "Location"
  ];

  emp_copy = this.emp;
  dataSource = new MatTableDataSource(this.emp_copy);
  @ViewChild(MatSort) sort: MatSort;

  search_Name = "";
  search_Company = "";
  search_Location = "";

  constructor() {
    for (let i = 0; i < this.table_columns.length; i++) {
      this.table_mod[i] = Object.assign({
        Column: this.table_columns[i].split(" ").join("_"),
        Value: false,
        Index: -1
      });
    }
    // console.log(this.table_mod);
  }

  ngOnInit() {
    debugger;
    this.dataSource.sort = this.sort;
    console.log(-prompt("Hello", "Muthu"));
    // this.emp_copy = this.emp_copy.filter(datas =>
    //   datas[this.searchColumn].toLowerCase().startsWith(
    //     'a'
    //   )
    // );
    // console.log(this.emp_copy);
  }

  toggle(value: string) {
    debugger;
    for (let i = 0; i < this.table_mod.length; i++) {
      if (value.split(" ").join("_") === this.table_mod[i].Column) {
        if (this.table_mod[i].Value === false) {
          this.table_mod[i].Value = !this.table_mod[i].Value;
          if (this.table_mod[i].Column === "Employee_Code") {
            this.displayedColumns.splice(0, 0, this.table_mod[i].Column);
          } else if (this.table_mod[i].Column === "Employee_Name") {
            this.displayedColumns.splice(1, 0, this.table_mod[i].Column);
          } else {
            this.displayedColumns.push(this.table_mod[i].Column);
          }
          this.table_mod[i].Index = this.displayedColumns.length - 1;
        } else {
          this.table_mod[i].Value = !this.table_mod[i].Value;
          this.displayedColumns.splice(this.table_mod[i].Index, 1);
          this.reassign();
        }
      }
    }
    console.log(this.displayedColumns);
    // console.log(this.displayedColumns);
  }

  reassign() {
    debugger;
    for (let i = 0; i < this.table_mod.length; i++) {
      for (let j = 0; j < this.displayedColumns.length; j++) {
        if (this.displayedColumns[j] === this.table_mod[i].Column) {
          this.table_mod[i].Index = j;
        }
      }
    }
    // console.log(this.table_mod);
  }

  click(val) {
    console.log(val);
  }

  Employee_Load_On_Search() {
    this.emp_copy = this.emp;
    if (this.search_Name !== "") {
      this.emp_copy = this.emp_copy.filter(datas =>
        datas.Employee_Name.toLowerCase().startsWith(
          this.search_Name.toLowerCase()
        )
      );
    }

    if (this.search_Company !== "") {
      this.emp_copy = this.emp_copy.filter(datas =>
        datas.Company.toLowerCase().startsWith(
          this.search_Company.toLowerCase().trim()
        )
      );
    }

    if (this.search_Location !== "") {
      this.emp_copy = this.emp_copy.filter(datas =>
        datas.Location.toLowerCase().startsWith(
          this.search_Location.toLowerCase()
        )
      );
    }

    if (
      this.search_Name === "" &&
      this.search_Location === "" &&
      this.search_Company === ""
    ) {
      this.emp_copy = this.emp;
    }
    this.dataSource = new MatTableDataSource(this.emp_copy);
    this.dataSource.sort = this.sort;
  }
}

export class Employee {
  Employee_Code: string;
  Employee_Name: string;
  Date_Of_Joining: string;
  Salary: number;
  Section: string;
  Company: string;
  Location: string;
}

// reuse

// if (value === "DOJ") {
//   this.DOJ = !this.DOJ;
//   if (this.DOJ === true) {
//     this.displayedColumns.push("Date_Of_Joining");
//     this.DOJ_Index = this.displayedColumns.length - 1;
//   } else {
//     this.displayedColumns.splice(this.DOJ_Index, 1);
//     this.reassign();
//   }
// }

// if (value === "Salary") {
//   this.Salary = !this.Salary;
//   if (this.Salary === true) {
//     this.displayedColumns.push("Salary");
//     this.Salary_Index = this.displayedColumns.length - 1;
//   } else {
//     this.displayedColumns.splice(this.Salary_Index, 1);
//     this.reassign();
//   }
// }

// if (value === "Section") {
//   this.Section = !this.Section;
//   if (this.Section === true) {
//     this.displayedColumns.push("Section");
//     this.Section_Index = this.displayedColumns.length - 1;
//   } else {
//     this.displayedColumns.splice(this.Section_Index, 1);
//     this.reassign();
//   }
// }

// if (value === "Company") {
//   this.Company = !this.Company;
//   if (this.Company === true) {
//     this.displayedColumns.push("Company");
//     this.Company_Index = this.displayedColumns.length - 1;
//   } else {
//     this.displayedColumns.splice(this.Company_Index, 1);
//     this.reassign();
//   }
// }
// console.log(this.displayedColumns);

// reassign() {
//   for (let i = 0; i < this.displayedColumns.length; i++) {
//     if (this.displayedColumns[i] === "Date_Of_Joining") {
//       this.DOJ_Index = i;
//     }
//     if (this.displayedColumns[i] === "Salary") {
//       this.Salary_Index = i;
//     }
//     if (this.displayedColumns[i] === "Section") {
//       this.Section_Index = i;
//     }
//     if (this.displayedColumns[i] === "Company") {
//       this.Company_Index = i;
//     }
//   }
// }
