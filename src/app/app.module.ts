import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoalComponent } from './session1/goal/goal.component';
import { QuoteComponent } from './session2/quote/quote.component';
import { AuthorComponent } from './session2/author/author.component';
import { ProjectsComponent } from './session2-video33/projects/projects.component';
import { ProjectComponent } from './session2-video33/project/project.component';
import { NewProjectComponent } from './session2-video33/new-project/new-project.component';
import { UsersComponent } from './session2-video33/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    QuoteComponent,
    AuthorComponent,
    ProjectsComponent,
    ProjectComponent,
    NewProjectComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
