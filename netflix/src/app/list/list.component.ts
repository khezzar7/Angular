import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../service/article.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  series:any=[];
  

 
  constructor(private articleService: ArticleService) {
    
   }

  ngOnInit() {
    this.getSeries();
  }
  getSeries():void{
    this.articleService.getSeries().subscribe(data=>
      {
        let cle = Object.keys(data);
        console.log(cle);
        
       let donnee=Object.values(data);
        for(let i = 0; i < cle.length; i++){
          this.series.push({key:cle[i], values:donnee[i]});

        }
        
      });
    

  }
}
