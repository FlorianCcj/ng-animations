import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgAnimationsAdvancedIndexComponent } from './ng-animations-advanced-index/ng-animations-advanced-index.component';
import { SynamicDimentionalPropComponent } from './synamic-dimentional-prop/synamic-dimentional-prop.component';
import { MetaStateComponent } from './meta-state/meta-state.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgAnimationsAdvancedIndexComponent,
    SynamicDimentionalPropComponent,
    MetaStateComponent
  ]
})
export class StyleNgAnimationsAdvancedModule { }
