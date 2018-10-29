import { Component, OnInit } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-file-upload-component',
  templateUrl: './file-upload-component.component.html',
  styleUrls: ['./file-upload-component.component.css']
})
export class FileUploadComponentComponent implements OnInit {

  test: Demo[] = [
    { name: 'a', age: '1' },
    { name: 'b', age: '2' },
    { name: 'c', age: '3' },
    { name: 'd', age: '4' },
    { name: 'e', age: '5' },
    { name: 'f', age: '6' },
    { name: 'g', age: '7' }
  ];
  value: string;
  test1: Demo1[] = [];
  constructor(private http: Http) { }

  ngOnInit() {
  }

  fileChange(event) {
    // tslint:disable-next-line:no-debugger
    debugger;
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      // const headers = new Headers();
      // headers.append('Content-Type', 'json');
      // headers.append('Accept', 'application/json');
      // const options = new RequestOptions({ headers: headers });
      const apiUrl1 = 'http://localhost:64789/api/file_upload';
      this.http.post(apiUrl1, formData)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        );
    }
    // window.location.reload();
  }

  on_click() {
    for (let i = 0; i < this.test.length; i++) {
      // this.test1[i].name = this.test[i].name;
      // this.test1[i].age = this.test[i].age;
      // this.test1[i] = this.test[i];
      // this.test1[i].name = this.test[i].name;
      // this.value = this.test[i].name;
      // this.test1.push(<Demo1> this.test[i]);
      // tslint:disable-next-line:no-unused-expression
      // this.test1[i].name = 'aaa';
      // this.test1 = [
      //   {
      //     'name': this.test[i].name
      //   }
      // ];
      this.test1[i] = Object.assign({name: this.test[i].name});
      // console.log(this.test1);
    }
    console.log(this.test1);
  }

}

export class Demo {
  name: string;
  age: string;
}

export class Demo1 {
  name: string;
}
