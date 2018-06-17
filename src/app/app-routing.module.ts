/* tslint:disable:max-line-length */
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'style', loadChildren: './style/style.module#StyleModule' },
  { path: 'css', loadChildren: './style-css-animations-transitions/style-css-animations-transitions.module#StyleCssAnimationsTransitionsModule' },
  { path: '', redirectTo: 'style', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
