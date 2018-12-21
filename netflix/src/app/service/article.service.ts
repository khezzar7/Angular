import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import {Serie}from '../serie';

const httpoptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
series:any[];
i:number;
  constructor(private http:HttpClient) {}
   getSeries():Observable<Serie[]>{
     return this.http.get<Serie[]>('https://netflix-2ade5.firebaseio.com/series.json').pipe(tap(data=>data,catchError(this.errorHandler)))
       

   }
   errorHandler(error:HttpErrorResponse){
     return observableThrowError(error.message||"Server Error");
   }
  //Ajout de serie
    addserie(obj){
    console.log(obj);
    
   // let serie = new Serie(obj.img,obj.title,obj.categorie,obj.content);
    this.http
    .post('https://netflix-2ade5.firebaseio.com/series.json',obj,httpoptions).subscribe(()=>{
      console.log('ça marche');
      
      
    })
  }

    getSerie(){
      return this.http.get<Serie[]>('https://netflix-2ade5.firebaseio.com/series.json').pipe(tap(data=>data,catchError(this.errorHandler)))

    }
  //Modification
  edit(){

   console.log('Modifier');
    
  }
}
