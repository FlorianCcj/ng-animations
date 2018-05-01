import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleMultiCompComponent } from './style-multi-comp/style-multi-comp.component';
import { StyleSingleCompComponent } from './style-single-comp/style-single-comp.component';
import { GoalComponent } from './goal/goal.component';
import { QuoteComponent } from './quote/quote.component';
import { AuthorComponent } from './author/author.component';
import { ProjectStyleComponent } from './project-style/project-style.component';
import { NewProjectComponent } from './project-style/new-project/new-project.component';
import { ProjectComponent } from './project-style/project/project.component';
import { ProjectsComponent } from './project-style/projects/projects.component';
import { UsersComponent } from './project-style/users/users.component';
import {StyleRoutingModule} from './style-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StyleRoutingModule,
  ],
  declarations: [
    StyleMultiCompComponent,
    StyleSingleCompComponent,
    ProjectStyleComponent,
    GoalComponent, QuoteComponent, AuthorComponent, NewProjectComponent, ProjectComponent, ProjectsComponent, UsersComponent
  ]
})
export class StyleModule { }