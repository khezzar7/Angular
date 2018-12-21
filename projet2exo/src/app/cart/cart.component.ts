import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any; 
  constructor( private productService : ProductService) {
    this.products = this.productService.products;
   }

  ngOnInit() {
  }
  panier(i){
    console.log(i);
    
    //this.productService.ajouter(i);
  }

}
