import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products:any=[];
 
  constructor(private productService : ProductService ) {
    this.products= this.productService.products;
    }
   panier(i:number):void{
     console.log(i);
     this.productService.panier(i);
   }
   
  ngOnInit() {
  }

}
