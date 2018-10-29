import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-nk',
  templateUrl: './sorting-nk.component.html',
  styleUrls: ['./sorting-nk.component.css']
})
export class SortingNKComponent implements OnInit {

  names: Namemodal[] = [
    { name: 'muthu' },
    { name: 'madhan' },
    { name: 'sandy' },
    { name: 'james' },
    { name: 'nandha' },
    { name: 'sathish' },
    { name: 'vignesh' },
    { name: 'anbu' },
    { name: 'velu' }
  ];
  test = ' he ll o  ';

  names1 = this.names;
  constructor() { }

  ngOnInit() {
  }

  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.names1 = this.filterEmployees(value);
    // alert(this.names1);
  }


  filterEmployees(searchString: string) {
    return this.names.filter(namess =>
      namess.name.toLowerCase().startsWith(searchString.toLocaleLowerCase()));
  }

  // trimming() {
  //   alert(this.test.trim());
  // }


}

export class Namemodal {
  name: string;
}
