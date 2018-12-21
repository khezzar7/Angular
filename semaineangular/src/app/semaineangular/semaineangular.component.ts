import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaineangular',
  templateUrl: './semaineangular.component.html',
  styleUrls: ['./semaineangular.component.less']
})
export class SemaineangularComponent implements OnInit {

  students:any = [{
    name: 'Joseph',
    age: 20,
  },
{
    name: 'Will',
    age: 50
},
{
    name:'Smith',
    age: 60
}
];


  constructor() { }

  ngOnInit() {
  }

}
