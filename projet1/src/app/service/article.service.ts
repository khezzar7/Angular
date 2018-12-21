import { Injectable } from '@angular/core';
import {Article} from '../article';
import { splitClasses } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  posts:any;
  connect:boolean;
  constructor() { 
    this.posts = [
      new Article ('Premier Post','Ceci est le contenue du premier post','Elvis',10,0,null),
      new Article ('Deuxieme Post','Ceci est le contenue du deuxieme post','Patator',-10,0,null),
      new Article ('Troisieme Post','Ceci est le contenue du troisieme post','Zaina',0,1,null)
    ];
    this.connect= true;
  }
  supprimer(index:number):void{
    this.posts.splice(index,1);
  }
}
