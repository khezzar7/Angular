import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 products:any;

 

   constructor(private productService:ProductService) {
    this.products = this.productService.products;
    
   }
   detail(i){
    console.log(i);
    
  }
  ngOnInit() {
  }
 
}
