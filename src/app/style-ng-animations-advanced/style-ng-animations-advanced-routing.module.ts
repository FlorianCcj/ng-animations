/* tslint:disable:max-line-length */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnimationEventComponent } from './animation-event/animation-event.component';
import { DynamicDimentionalPropComponent } from './dynamic-dimentional-prop/dynamic-dimentional-prop.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { ListAnimationsComponent } from './list-animations/list-animations.component';
import { MetaStateComponent } from './meta-state/meta-state.component';
import { TimingFunctionComponent } from './timing-function/timing-function.component';

const appRoutes: Routes = [
    { path: 'event', component: AnimationEventComponent },
    { path: 'dimension', component: DynamicDimentionalPropComponent },
    { path: 'keyframes', component: KeyframesComponent },
    { path: 'list', component: ListAnimationsComponent },
    { path: 'meta', component: MetaStateComponent },
    { path: 'timing', component: TimingFunctionComponent },
    { path: '', redirectTo: 'event', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class StyleNgAnimationsAdvancedRoutingModule {}
