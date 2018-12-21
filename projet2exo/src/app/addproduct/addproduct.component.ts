import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  products:any=[];
  constructor( private productService :ProductService) {
    this.products= this.productService.products;
   }

  ngOnInit() {
  }
onSubmit(f){
  console.log(f);
  let title = f.value.title;
  let content = f.value.content;
  let price = f.value.price;
  let photo = f.value.photo;
   this.productService.addproduct(title,content,price,photo);
}
}
