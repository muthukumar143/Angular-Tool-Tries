import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel-fomat',
  templateUrl: './excel-fomat.component.html',
  styleUrls: ['./excel-fomat.component.css']
})
export class ExcelFomatComponent implements OnInit {

  datas: any[] = [
    { s_no: '1', name: 'aaa' },
    { s_no: '2', name: 'bbb' },
    { s_no: '3', name: 'ccc' },
    { s_no: '4', name: 'ddd' },
    { s_no: '5', name: 'eee' },
    { s_no: '6', name: 'fff' },
    { s_no: '7', name: 'ggg' },
    { s_no: '8', name: 'hhh' },
    { s_no: '9', name: 'iii' },
    { s_no: '10', name: 'jjj' },
    { s_no: '11', name: 'kkk' },
    { s_no: '12', name: 'lll' },
  ];

  constructor() { }

  ngOnInit() {
  }

  exportTableToExcel(tableID, filename = '') {
    let downloadLink;
    const dataType = 'application/vnd.ms-excel';
    const tableSelect = document.getElementById(tableID);
    const tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    filename = filename ? filename + '.xls' : 'excel_data.xls';
    downloadLink = document.createElement('a');

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      const blob = new Blob(['\ufeff', tableHTML], {
        type: dataType
      });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {

      downloadLink.href = 'data:' + dataType + ', ' + tableHTML;


      downloadLink.download = filename;


      downloadLink.click();
    }
  }

}
