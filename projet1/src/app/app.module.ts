import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { GestionComponent } from './gestion/gestion.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes =[
  { path:'gestion', component: GestionComponent},
  {path: 'liste',component: ListComponent},
  {path:'',component:ListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    DetailComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
