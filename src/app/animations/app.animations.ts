// app.animations.ts
import { trigger, transition, style, animate, group, query, stagger } from '@angular/animations';

export const fadeInOutBanner = trigger('fadeInOut', [
  transition(':enter', [
    group([
      style({ opacity: 0 }),
      animate('600ms ease-in-out', style({ opacity: 1 })),
      query('h1, :not(h1)', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('600ms ease-in-out', style({ opacity: 1 })),
        ]),
      ], { optional: true }),
    ]),
  ]),
]);

export const fadeInFromBottom = trigger('fadeInFromBottom', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
