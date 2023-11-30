import { Component, ElementRef, ViewChild } from '@angular/core';
import { SectionAnimationsService } from 'src/app/service/section-animation.service';

@Component({
  selector: 'what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss']
})
export class WhatWeOfferComponent {
  @ViewChild('sectionAnimation', { static: true }) sectionAnimation!: ElementRef;

  constructor(private animationService: SectionAnimationsService) { }

  ngAfterViewInit() {
    const targetElement = this.sectionAnimation.nativeElement;

    // Use the animation service to apply the global animation
    const tl = this.animationService.playSectionGlobalAnimation(targetElement);

    // // Customize the animation further if needed
    // tl.to(targetElement.querySelector('.section-title .title'), {
    //   duration: 2,
    //   // Additional animation options...
    // });
  }
}
