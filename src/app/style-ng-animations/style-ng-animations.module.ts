import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetNgAnimationsComponent } from './projet-ng-animations/projet-ng-animations.component';
import { NewProjectComponent } from './projet-ng-animations/new-project/new-project.component';
import { ProjectComponent } from './projet-ng-animations/project/project.component';
import { ProjectsComponent } from './projet-ng-animations/projects/projects.component';
import { UsersComponent } from './projet-ng-animations/users/users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjetNgAnimationsComponent, NewProjectComponent, ProjectComponent, ProjectsComponent, UsersComponent]
})
export class StyleNgAnimationsModule { }
