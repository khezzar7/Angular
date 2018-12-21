import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../service/article.service';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

   posts:any; 
  constructor( private articleService : ArticleService) {
    this.posts = this.articleService.posts;
   }

  ngOnInit() {
  }
  supprimer(i){
    this.articleService.supprimer(i);
    
  }
}
