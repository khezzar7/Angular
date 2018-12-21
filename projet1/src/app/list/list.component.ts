import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../service/article.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

posts:any;

  constructor(private articleService : ArticleService) {
    this.posts=this.articleService.posts;
   }


  ngOnInit() {
  }

}
