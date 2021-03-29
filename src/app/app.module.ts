import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {ListToDoComponent} from './components/list-to-do/list-to-do.component';
import {ListToDosComponent} from './components/list-to-dos/list-to-dos.component';
import {RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ListToDosComponent,
    ListToDoComponent
      ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
