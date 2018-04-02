import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoalComponent } from './session1/goal/goal.component';
import { QuoteComponent } from './session2/quote/quote.component';
import { AuthorComponent } from './session2/author/author.component';
import { ProjectsComponent } from './session2-video33/projects/projects.component';
import { ProjectComponent } from './session2-video33/project/project.component';
import { NewProjectComponent } from './session2-video33/new-project/new-project.component';
import { UsersComponent } from './session2-video33/users/users.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsService } from './session2-video33/projects/projects.service';
import {AppCssAnimComponent} from './section3/app-css-anim.component';
import { Lecture58Component } from './section4-ng-animation/lecture58/lecture58.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    QuoteComponent,
    AuthorComponent,
    ProjectsComponent,
    ProjectComponent,
    NewProjectComponent,
    UsersComponent,
    AppCssAnimComponent,
    Lecture58Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // #section4
    BrowserAnimationsModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
