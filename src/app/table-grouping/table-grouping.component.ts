import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-grouping',
  templateUrl: './table-grouping.component.html',
  styleUrls: ['./table-grouping.component.css']
})
export class TableGroupingComponent implements OnInit {

  groupdata: Grouping[] = [
    {id: 1, country: 'India', product: 'soap', amount: 2500 },
    {id: 1, country: 'India', product: 'soap', amount: 2500 },
    {id: 1, country: 'India', product: 'soap', amount: 2500 },
    {id: 1, country: 'India', product: 'soap', amount: 2500 },
    {id: 1, country: 'India', product: 'soap', amount: 2500 },
    {id: 1, country: 'India', product: 'soap', amount: 2500 },
    {id: 1, country: 'India', product: 'soap', amount: 2500 },

    {id: 1, country: 'US', product: 'Mobile', amount: 12500 },
    {id: 1, country: 'US', product: 'Mobile', amount: 12500 },
    {id: 1, country: 'US', product: 'Mobile', amount: 12500 },
    {id: 1, country: 'US', product: 'Mobile', amount: 12500 },
    {id: 1, country: 'US', product: 'Mobile', amount: 12500 },
    {id: 1, country: 'US', product: 'Mobile', amount: 12500 },
    {id: 1, country: 'US', product: 'Mobile', amount: 12500 },

    {id: 1, country: 'UK', product: 'Laptop', amount: 30500 },
    {id: 1, country: 'UK', product: 'Laptop', amount: 30500 },
    {id: 1, country: 'UK', product: 'Laptop', amount: 30500 },
    {id: 1, country: 'UK', product: 'Laptop', amount: 30500 },
    {id: 1, country: 'UK', product: 'Laptop', amount: 30500 },
    {id: 1, country: 'UK', product: 'Laptop', amount: 30500 },
    {id: 1, country: 'UK', product: 'Laptop', amount: 30500 }
  ];

  constructor() { }

  ngOnInit() {
  }

}

export class Grouping {
  id: number;
  country: string;
  product: string;
  amount: number;
}
