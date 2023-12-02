import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-accordin',
  // standalone: true,
  // imports: [],
  templateUrl: './accordin.component.html',
  styleUrl: './accordin.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        display: 'none',
      })),
      state('expanded', style({
        height: '*',
        overflow: 'visible',
        opacity: '1',
        display: 'block',
      })),
      transition('collapsed <=> expanded', animate('200ms ease-in-out')),
    ]),
  ],
})
export class AccordinComponent {
  @Input() title: string = "";
  accordionState: "expanded" | "collapsed" = "collapsed";

  toggleAccordion() {
    this.accordionState = this.accordionState === "collapsed" ? "expanded" : "collapsed";
  }
}
