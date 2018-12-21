import { Component } from '@angular/core';
import {ProductService} from './service/product.service';
import {Product} from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce';
  login : boolean;
  constructor( private productService: ProductService){
    this.login = this.productService.login;
  }
  connexion(){
    this.productService.connexion();
    this.login = this.productService.login;
  }
  deconnexion(){
    this.productService.deconnexion();
   this.login= this.productService.login;
  }
}
