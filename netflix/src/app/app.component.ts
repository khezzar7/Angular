import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {Serie}from './serie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix';
  description = 'Angular-Firebase Demo';

  serieValue = '';
  series: Observable<any[]>;

  constructor(public db:AngularFireDatabase){
    this.series = db.list('series').valueChanges();
  }
  onSubmit(){
    this.db.list('/series').push({content:this.serieValue});
    this.serieValue='';
  }
}
