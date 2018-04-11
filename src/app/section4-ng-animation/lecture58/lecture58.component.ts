import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import {clickedStateTrigger, numberEnteredStateTrigger} from './animations';

@Component({
  selector: 'app-lecture58',
  templateUrl: './lecture58.component.html',
  styleUrls: ['./lecture58.component.scss'],
  animations: [
    trigger('clickedState', [
      state('default', style({
        backgroundColor: 'orange',
        width: '100px',
        height: '100px',
      })),
      state('clicked', style({
        backgroundColor: 'blue',
        width: '300px',
        height: '50px',
      })),
      state('mousedown', style({
        backgroundColor: 'red',
        border: '1px solid black',
        width: '100px',
        height: '100px',
      })),
      transition('default => clicked', animate('1s 500ms ease-in')),
      transition('clicked => default', animate(300)), // <=> '300ms ease-out'
      // transition('mousedown => clicked', animate(300)),
      // transition('clicked => mousedown', animate(300)),
      transition('clicked <=> mousedown', animate(300)),
    ]),
    trigger('numberEnteredState', [
      state('unselected', style({
        border: '1px solid black',
        padding: '5px',
      })),
      state('selected', style({
        border: '2px solid blue',
        padding: '4px',
        backgroundColor: 'lightBlue',
      })),
      // transition('unselected => selected', animate(300)),
      transition('unselected => selected', [ // all step in this array is temporary
        style({
          border: '2px solid black',
          padding: '4px',
        }),
        // animate(300),
        // style({
        //  backgroundColor: 'red',
        // }),
        // animate('600ms 100ms ease-out', style({backgroundColor: 'red'})),
        animate('600ms 100ms ease-out', style({
          backgroundColor: 'red',
          transform: 'scale(1.05)', // only work on block or inline-block
        })),
        animate(300),
      ]),
    ]),
    // outsourcing
    // clickedStateTrigger,
    // numberEnteredStateTrigger,
  ]
})
export class Lecture58Component {

  clickInfo = 'default';
  paragraphInfo = 'default';
  numberEntered;

  clickSimple() {
    this.clickInfo = this.clickInfo === 'default' ? 'clicked' : 'default';
    if (this.clickInfo === 'clicked') {
      setTimeout(() => {this.clickSimple(); }, 3000);
    }
  }
}