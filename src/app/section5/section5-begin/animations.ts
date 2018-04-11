import { group, trigger, state, style, transition, animate, keyframes } from '@angular/animations';


export const showStateTriggerFirst = trigger('showStateFirst', [
  state('shown', style({
  })),
  transition('void => shown', [
    style({
      opacity: 0,
    }),
    animate(300),
  ]),
  transition('shown => void', animate(300, style({
    opacity: 0,
  })))
]);

export const showStateTrigger = trigger('showState', [
  /*transition('void => *', [
    style({
      opacity: 0,
    }),
    animate(300),
  ]),
  transition('* => void', animate(300, style({
    opacity: 0,
  })))*/
  transition(':enter', [ // <=> void => *
    style({
      opacity: 0,
    }),
    animate(300),
  ]),
  transition(':leave', animate(300, style({ // <=> * => void
    opacity: 0,
  })))
]);

export const listStateTriggerFirst = trigger('listState', [
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'white'
    }),
    group([
      animate(200, style({
        opacity: 0.7,
      })),
      animate(500, style({
        backgroundColor: 'red'
      }))
    ]),
    animate(300, style({
      backgroundColor: 'lightblue'
    })),
  ]),
  transition(':leave', animate(300, style({ // <=> * => void
    opacity: 0,
  })))
]);

export const listStateTrigger = trigger('listState', [
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'white'
    }),
    group([
      animate(2000, style({
        opacity: 0.7,
      })),
      animate('5000ms ease-out', keyframes([
        style({
          backgroundColor: 'white',
          offset: 0
        }),
        style({
          backgroundColor: 'red',
          offset: 0.8
        }),
        style({
          backgroundColor: 'green',
          offset: 1
        }),
      ])),
    ]),
    animate(300, style({
      backgroundColor: 'lightblue'
    })),
  ]),
  transition(':leave', animate(300, style({ // <=> * => void
    opacity: 0,
  })))
]);

export const animateStateTriggerFirst = trigger('animateState', [
  transition('* => *', [
    animate(400, style({
      width: 0,
    })),
    animate(400, style({
      width: '*', // only for dimentional properties and you dont know which
    })),
  ])
]);

export const animateStateTrigger = trigger('animateState', [
  transition('* => *', [
    animate('400ms cubic-bezier(.18, .78, 0, .92)', style({
      // easings.net
      // cubic-bezier.com
      width: 0,
    })),
    animate(400, style({
      width: '*',
    })),
  ])
]);
