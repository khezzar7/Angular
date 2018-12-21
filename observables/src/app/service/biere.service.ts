import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {throwError as observableThrowError,Observable} from 'rxjs';
import {map,tap,catchError} from 'rxjs/operators';
import {Biere} from '../biere';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class BiereService {
  bieres:any=[];
liste:any;
  constructor(private http: HttpClient) {
    
   }
getBeer(name:string,brand:string,degree:number){
  let beer = new Biere(name,brand,degree);
  this.bieres.push(beer);


}
  // getListe():Observable<any[]>{
     //création d'un observable  
    //return this.http.get<any[]>('https://api.punkapi.com/v2/beers/').pipe( tap(data=>data));

   //}
}
