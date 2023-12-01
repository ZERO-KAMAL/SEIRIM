import { Component, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('sectionAnimation', { static: true }) sectionAnimation!: ElementRef;
  @ViewChildren('aboutListItem') aboutListItems!: QueryList<ElementRef>;

  currentSlideIndex: number = 0;

  constructor() { }


  ngAfterViewInit() {
    this.playAboutSectionAnimation();

    // this.aboutListItems.forEach((item, index) => {
    //   gsap.from(item.nativeElement, {
    //     duration: 0.5,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: index * 0.2, // Delays each item's animation slightly more than the previous one
    //     scrollTrigger: {
    //       trigger: item.nativeElement,
    //       start: "top bottom", // Animation starts when top of item hits the bottom of viewport
    //       toggleActions: "play none none none"
    //     }
    //   });
    // });

  }

  playAboutSectionAnimation() {
    const target = this.sectionAnimation.nativeElement;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none"
      },
      defaults: { duration: 0.3 },
    });

    tl.from(target.querySelector('.title-label'), { opacity: 0 })
      .from(target.querySelector('.title'), { opacity: 0 }, '-=0.1')
      .from(target.querySelector(' .line img'), { width: 0, opacity: 0 })
      // .from(target.querySelector(' .img-sm'), { scale: 0, opacity: 0 })
      .from(target.querySelectorAll('.para'), { opacity: 0, stagger: 0.1 })
      .from(target.querySelector(' .btn-trans'), { opacity: 0 })
      .from(target.querySelector('.big-img'), { x: 100, opacity: 0 })

    // Additional animations for aboutListItems
    this.aboutListItems.forEach((item, index) => {
      tl.from(item.nativeElement, {
        duration: 0.2,
        scale: 0.3,
        opacity: 0,
        // delay: index * 0.2,
        stagger: 0.1,
      },);
    });
  }


  aboutUsData = [
    {
      cardIcon: '../../../../assets/images/about-icons/webPageIcon.png',
      count: '375+',
      description: 'Website and IT Projects Delivered'
    },
    {
      cardIcon: '../../../../assets/images/about-icons/revenueIcon.png',
      count: '$1.6B',
      description: 'Largest Client Revenue Level'
    },
    {
      cardIcon: '../../../../assets/images/about-icons/cmsIcon.png',
      count: '2.8M',
      description: 'Products Managed by our CMS'
    },
    {
      cardIcon: '../../../../assets/images/about-icons/diffProjectIcon.png',
      count: '20+',
      description: 'Languages of Different Projects'
    },
    {
      cardIcon: '../../../../assets/images/about-icons/teamMemberIcon.png',
      count: '25+',
      description: 'Team Members Across China and Southeast Asia'
    }
  ];
}
