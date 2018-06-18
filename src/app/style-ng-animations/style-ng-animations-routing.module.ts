/* tslint:disable:max-line-length */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnimationMultiStepTransitionComponent } from './animation-multi-step-transition/animation-multi-step-transition.component';
import { AnimationWithMultipleTransitionsComponent } from './animation-with-multiple-transitions/animation-with-multiple-transitions.component';
import { AnimationWithTemporaryStateComponent } from './animation-with-temporary-state/animation-with-temporary-state.component';
import { AnimationWithTransitionComponent } from './animation-with-transition/animation-with-transition.component';
import { SimpleNgAnimationComponent } from './simple-ng-animation/simple-ng-animation.component';

const appRoutes: Routes = [
  { path: 'basics', component: SimpleNgAnimationComponent },
  // { path: 'transition', component: AnimationWithTransitionComponent },
  // { path: 'temporary-state', component: AnimationWithTemporaryStateComponent },
  // { path: 'multi-step-transition', component: AnimationMultiStepTransitionComponent },
  // { path: 'multi-transition', component: AnimationWithMultipleTransitionsComponent },
  { path: '', redirectTo: 'basics', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class StyleNgAnimationsRoutingModule {}
