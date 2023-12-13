import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SectionTitleAnimationsService } from 'src/app/service/section-title-animation.service';
import gsap from 'gsap';

@Component({
  selector: 'what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss'],
})
export class WhatWeOfferComponent implements AfterViewInit {
  @ViewChild('sectionTitleAnimation', { static: true }) sectionTitleAnimation!: ElementRef;
  @ViewChild('offerContentAnimation') offerContentAnimation!: ElementRef;
  @ViewChild('tabAnimation', { static: true }) tabAnimation!: ElementRef;

  tabs: string[] = ["Cybersecurity", "Development", "Digital Marketing"];
  currentTabIndex: number = 0;

  onTabSelected(index: number): void {
    this.currentTabIndex = index;
  }

  constructor(private animationService: SectionTitleAnimationsService, private el: ElementRef) { }



  ngAfterViewInit() {
    const targetElement = this.sectionTitleAnimation.nativeElement;
    const tl = this.animationService.playSectionTitleGlobalAnimation(targetElement);

    this.playOfferContentAnimation();
    // tl.eventCallback('onComplete', () => {
    // });


  }
  playOfferContentAnimation() {


    // Obtain the reference to the second element
    const offerContent = this.offerContentAnimation.nativeElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: offerContent,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none"
      },
      defaults: { duration: 0.4, ease: "power2.out" },
    });

    // Define the animation for the second element (top-right-item)
    tl.from(offerContent.querySelector('.section-title .title-label'), { opacity: 0 })
      .from(offerContent.querySelectorAll('.section-title .title'), { opacity: 0 }, '-=0.1')
      .from(offerContent.querySelector(' .line img'), { width: 0, opacity: 0 }, '-=0.1')
      .from(offerContent.querySelector(' .img-sm'), { scale: 0, opacity: 0 }, '-=0.1')
      .from(offerContent.querySelector('.big-img'), { opacity: 0 })
      .from(offerContent.querySelectorAll(' .para'), { opacity: 0 })
      .from(offerContent.querySelector(' .btn-trans'), { opacity: 0, ease: 'elastic.out(1, 0.3)' })
      .from(offerContent.querySelector('.list-content .title'), { opacity: 0 })
      .from(offerContent.querySelectorAll('.list-content li'), { opacity: 0, stagger: 0.1 });

  }
}
