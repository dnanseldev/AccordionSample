import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';


const toogle = trigger('toogle', [
  state(
    'close',
    style({
      height: '0',
      overflow: 'hidden',
      opacity: '0',
      visibility: 'hidden',
    })
  ),
  state(
    'open',
    style({
      overflow: 'hidden',
    })
  ),
  transition('open<=>close', animate('250ms')),
]);

const rotate = trigger('rotate', [
  state(
    'plane',
    style({
      transform: 'rotate(0)',
    })
  ),
  state(
    'rotated',
    style({
      transform: 'rotate(90deg)',
    })
  ),
  transition('plane<=>rotated', animate('250ms')),
]);

@Component({
  selector: 'nice-accordion-item',
  templateUrl: './nice-accordion-item.component.html',
  styleUrl: './nice-accordion-item.component.css',
  animations: [toogle, rotate],
})
export class NiceAccordionItemComponent {
  show_content = false;
  faArrowRight = faArrowRight;

  toggleContent() {
    this.show_content = !this.show_content;
  }

}
