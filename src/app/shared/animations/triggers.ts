import { transition, trigger, useAnimation } from '@angular/animations';
import { buttonHoverAnimation } from './transitions';

export const onButtonHoverAnimation = trigger('hoverInOut', [
  transition('in <=> out', [
    useAnimation(buttonHoverAnimation, {
      params: {
        backgroundColor: 'red',
      },
    }),
  ]),
]);
