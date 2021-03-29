import {Component, Input, OnInit} from '@angular/core';
import {ListToDo} from '../../models/ListToDo';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {
  @Input()
  listToDo: ListToDo;


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }


  getTodo(): void {
    console.log('todo');
  }
}
