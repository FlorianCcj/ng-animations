import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { StyleMultiCompComponent } from './style-multi-comp/style-multi-comp.component';
import { StyleSingleCompComponent } from './style-single-comp/style-single-comp.component';
import { GoalComponent } from './goal/goal.component';
import { QuoteComponent } from './quote/quote.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectComponent, StyleMultiCompComponent, StyleSingleCompComponent, GoalComponent, QuoteComponent, AuthorComponent
  ]
})
export class StyleModule { }
