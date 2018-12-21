import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
products : any;
  constructor(private productService : ProductService) {
    this.products = this.productService.products;

   }

   supprimer(i:number):void{
     this.productService.supprimer(i);
   }
  ngOnInit() {
  }

}
