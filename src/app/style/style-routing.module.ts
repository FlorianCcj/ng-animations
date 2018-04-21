import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProjectsComponent } from './project-style/projects/projects.component';
import { UsersComponent } from './project-style/users/users.component';

const appRoutes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class StyleRoutingModule {}
