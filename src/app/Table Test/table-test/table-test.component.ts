import { Component, OnInit, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit {

  @ViewChild('text') text: HTMLInputElement;
  el: HTMLElement;
  date = new Date();
  name = 'Madhan';

  tabledata: any[] = [
    { fn: 'aaa', ln: 'a', mail: 'vnsjf' },
    { fn: 'aaa', ln: 'a', mail: 'vnsjf' },
    { fn: 'aaa', ln: 'a', mail: 'vnsjf' },
    { fn: 'aaa', ln: 'a', mail: 'vnsjf' }
  ];
  constructor(private _renderer: Renderer) { }

  ngOnInit() {
  }

  function() {
    console.log(this.tabledata);
  }

  getdate() {
    console.log('getDate=' + this.date.getDate());
    console.log('getDay=' + this.date.getDay());
    console.log('getFullYear=' + this.date.getFullYear());
    console.log('getHours=' + this.date.getHours());
    console.log('getMilliseconds=' + this.date.getMilliseconds());
    console.log('getMinutes=' + this.date.getMinutes());
    console.log('getMonth=' + this.date.getMonth());
    console.log('getSeconds=' + this.date.getSeconds());
    console.log('getTime=' + this.date.getTime());
    console.log('getTimezoneOffset=' + this.date.getTimezoneOffset());
    console.log('getUTCDate=' + this.date.getUTCDate());
    console.log('getUTCDay=' + this.date.getUTCDay());
    console.log('getUTCFullYear=' + this.date.getUTCFullYear());
    console.log('getUTCHours=' + this.date.getUTCHours());
    console.log('getUTCMilliseconds=' + this.date.getUTCMilliseconds());
    console.log('getUTCMinutes=' + this.date.getUTCMinutes());
    console.log('getUTCMonth=' + this.date.getUTCMonth());
    console.log('getUTCSeconds=' + this.date.getUTCSeconds());
    console.log('date=' + this.date);

  }

  onclick(i, length) {
    // document.getElementById('text1').readonly = true;
    const el = document.getElementById('text' + i);
    el.setAttribute('disabled', '');
    // this._renderer.setElementAttribute('text1', 'disabled', 'true');
    console.log(i, length);

  }
}
