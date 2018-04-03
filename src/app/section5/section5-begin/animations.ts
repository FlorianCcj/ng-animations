import { trigger, state, style, transition, animate } from '@angular/animations';


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


export const animateStateTrigger = trigger('animateState', [
  transition('* => *', [
    animate(400, style({
      width: 0,
    })),
    animate(400, style({
      width: '*', // only for dimentional properties and you dont know which
    })),
  ])
]);
