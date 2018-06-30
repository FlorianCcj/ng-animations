import { Component } from '@angular/core';
import { animateStateTrigger, animateMetaStateTrigger } from './animations';

@Component({
  selector: 'app-dynamic-dimentional-prop',
  templateUrl: './dynamic-dimentional-prop.component.html',
  styleUrls: ['./dynamic-dimentional-prop.component.scss'],
  animations: [
    animateStateTrigger,
    animateMetaStateTrigger
  ]
})
export class DynamicDimentionalPropComponent {
  width = 400;
  animate = false;

  constructor() { }
}
