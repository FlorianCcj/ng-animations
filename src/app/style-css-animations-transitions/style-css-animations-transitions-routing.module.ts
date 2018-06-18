import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjetCssAnimationComponent } from './projet-css-animation/projet-css-animation.component';
import { ComplexAnimationComponent } from './complex-animation/complex-animation.component';
import { BasicAnimationComponent } from './basic-animation/basic-animation.component';
import { ComplexeTransitionComponent } from './complexe-transition/complexe-transition.component';
import { SimpleTransitionComponent } from './simple-transition/simple-transition.component';

const appRoutes: Routes = [
  { path: 'simple-transition', component: SimpleTransitionComponent },
  { path: 'complex-transition', component: ComplexeTransitionComponent },
  { path: 'basic-animation', component: BasicAnimationComponent },
  { path: 'complex-animation', component: ComplexAnimationComponent },
  { path: 'project', component: ProjetCssAnimationComponent },
  { path: '', redirectTo: 'simple-transition', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class StyleCssAnimationsTransitionsRoutingModule {}
