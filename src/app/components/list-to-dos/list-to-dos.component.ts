import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListToDo} from '../../models/ListToDo';

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  listToDos: ListToDo[];
  listToDo = {title: ''};

  // tslint:disable-next-line:variable-name
  private _url = 'http://localhost:8080/listtodos';

  constructor(private http: HttpClient) {

  }

  save(myForm: any): void {
    console.log(this.listToDo);

    this.http.post<ListToDo>(this._url + '/save', this.listToDo)
      .subscribe(() => {
        this.http.get<ListToDo[]>(this._url).subscribe(value => this.listToDos = value);
      });

  }

  ngOnInit(): void {
    this.http.get<ListToDo[]>(this._url).subscribe(value => this.listToDos = value);
  }


}
