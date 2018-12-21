import { Component, OnInit } from '@angular/core';
import {BiereService} from '../service/biere.service';

@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.css']
})
export class BiereComponent implements OnInit {
  bieres:any;
  constructor(private biereService : BiereService) {
    this.bieres= this.biereService;
    console.log('Liste' + this.bieres);
    
   }

  ngOnInit() {
    console.log('test');
    
  

    console.log('apres');
    
  }

 

}
