import { Component, OnInit } from '@angular/core';
import {showStateTrigger, animateStateTrigger, listStateTrigger} from './animations';
// #section5
@Component({
  selector: 'app-section5-begin',
  templateUrl: './section5-begin.component.html',
  styleUrls: ['./section5-begin.component.scss'],
  animations: [
    showStateTrigger,
    animateStateTrigger,
    listStateTrigger
  ]
})
export class Section5BeginComponent {
  isShown = true;
  width = 400;
  animate = false;
  testResults = [];

  onAddElement() {
    this.testResults.push(Math.random());
  }
}
