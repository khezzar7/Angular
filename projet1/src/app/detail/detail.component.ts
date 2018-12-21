import { Component, OnInit,Input } from '@angular/core';
import {ArticleService} from '../service/article.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() post:any;
  connect:boolean;
    like(){
     
       this.post.like++;
     
     
   }
   unlike(){
     this.post.unlike++;
     
   }
  constructor(private articleService: ArticleService ) { 
    this.connect=this.articleService.connect;

  }

  ngOnInit() {
  }

}
