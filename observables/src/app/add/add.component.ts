import { Component, OnInit } from '@angular/core';
import {BiereService} from '../service/biere.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
bieres:any=[];
  constructor(private biereService: BiereService) { 
    this.bieres= this.biereService.bieres;
  }

  ngOnInit() {
  }
onSubmit(f){
  console.log(f);
  let name= f.value.name;
  let brand = f.value.brand;
  let degree = f.value.degree;
  this.biereService.getBeer(name,brand,degree);
  
}
}
