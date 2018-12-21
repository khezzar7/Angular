import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { GestionComponent } from './gestion/gestion.component';
import {RouterModule, Routes} from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import {FormsModule} from '@angular/forms'
const appRoutes:Routes =[
  { path:'gestion', component: GestionComponent},
  {path: 'productliste',component: ProductlistComponent},
  {path:'',component: ProductlistComponent},
  {path:'product /:id',component:DetailComponent},
  {path: 'add',component:AddproductComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    DetailComponent,
    CartComponent,
    GestionComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
