import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
series:any=[];
  constructor(private articleService :ArticleService, private router :Router) { 
   
  }

  ngOnInit() {
   
  }
 
  onSubmit(f){
   
   
    this.articleService.addserie(f.value);
    this.router.navigate(['/liste']);
    

  }
}
