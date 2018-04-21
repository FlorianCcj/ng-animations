import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTransitionComponent } from './simple-transition/simple-transition.component';
import { ComplexeTransitionComponent } from './complexe-transition/complexe-transition.component';
import { BasicAnimationComponent } from './basic-animation/basic-animation.component';
import { ComplexAnimationComponent } from './complex-animation/complex-animation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpleTransitionComponent, ComplexeTransitionComponent, BasicAnimationComponent, ComplexAnimationComponent]
})
export class StyleCssAnimationsTransitionsModule { }
