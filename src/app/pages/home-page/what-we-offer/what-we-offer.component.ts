import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SectionAnimationsService } from 'src/app/service/section-animation.service';
import gsap from 'gsap';

@Component({
  selector: 'what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss']
})
export class WhatWeOfferComponent implements AfterViewInit {
  @ViewChild('sectionAnimation', { static: true }) sectionAnimation!: ElementRef;

  tabs: string[] = ["Cybersecurity", "Development" ,"Digital Marketing"];
  currentTabIndex: number = 0;

  onTabSelected(index: number) : void {

    this.currentTabIndex = index;
  }

  constructor(private animationService: SectionAnimationsService ,private el: ElementRef) { }



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
