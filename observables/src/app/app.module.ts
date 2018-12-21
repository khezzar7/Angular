import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { BiereComponent } from './biere/biere.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
//Firebase
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AddComponent } from './add/add.component';

const appRoutes:Routes=[
  {path:'add',component:AddComponent},
  {path:'',component:BiereComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    BiereComponent,
    AddComponent, 
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
