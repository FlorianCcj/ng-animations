import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

export const markedTrigger = trigger('markedState', [
  state('default', style({
    border: '1px solid black',
    backgroundColor: 'transparent',
    padding: '20px',
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9',
    padding: '19px',
  })),
  // transition('default <=> marker', animate('300ms ease-out')),
  transition('default => marker', [
    style({
      border: '2px solid black',
      padding: '19px',
    }),
    animate('300ms ease-out', style({
      transform: 'scale(1.05)',
    })),
    animate(300),
  ]),
  transition('marker => default', [
    style({
      border: '1px solid blue',
      padding: '20px',
    }),
    animate('300ms ease-out'),
  ]),
]);

export const itemStateTrigger = trigger('itemState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)',
      offset: 0,
    }),
    // V1
    // animate('500ms ease-out', style({
    //  opacity: 1,
    //  transform: 'translateX(0)'
    // })),
    animate('500ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offset: 0.4,
      }),
      style({
        opacity: 1,
        transform: 'translateX(15%)'
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 1,
      }),
    ])),
  ]),
  transition(':leave', [
    // V1
    // animate('500ms ease-in', style({
    //  opacity: 0,
    //  transform: 'translateX(100%)'
    // })),
    animate('500ms ease-in', keyframes([
      style({
        opacity: 1,
        transform: 'translate(0)',
      }),
      style({
        transform: 'translateX(-15%)',
      }),
      style({
        opacity: 0,
        transform: 'translate(100%)',
      }),
    ]))
  ]),
  // when create bloc is open, item bloc slide down
  transition('slidUp => slidDown', [
    style({
      transform: 'translateY(-100%)',
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),
  transition('slidDown => slidUp', [
    style({
      transform: 'translateY(0)',
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(-100%)'
    }))
  ]),
]);

export const slideStateTrigger = trigger('slideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    })),
  ]),
  transition(':leave', [
    style({
      transform: 'translateY(0)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(-100)'
    })),
  ]),
]);