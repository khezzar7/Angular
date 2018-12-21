import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../service/article.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  serie:any=[];
 
  constructor(private articleService:ArticleService, private route: ActivatedRoute,private router :Router) { 
   
    const serie = route.snapshot.data.serie;
  }

  ngOnInit() {
    this.serie = this.route.snapshot.params.id;
    this.getSerie(this.serie);
  }
onSubmit(f):void{
  this.articleService.edit();
  this.router.navigate(['/liste']);
 }

 getSerie(serie):void{
    this.articleService.getSeries().subscribe(data=>
      {
        console.log(data);
      });
  }
 }

