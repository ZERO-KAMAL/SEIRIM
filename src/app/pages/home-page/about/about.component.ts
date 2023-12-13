import { Component, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('sectionAnimation', { static: true }) sectionAnimation!: ElementRef;

  currentSlideIndex: number = 0;

  constructor() { }


  ngAfterViewInit() {
    this.playAboutSectionAnimation();
  }

  playAboutSectionAnimation() {
    const target = this.sectionAnimation.nativeElement;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: "top center",
        end: () => `+=${target.offsetHeight}`,  // This will make it end after the height of the element has scrolled past the start point.
        toggleActions: "play none none none"
      },
      defaults: { duration: 0.3, ease: "power2.out" }
    });

    tl
      .from(target.querySelector('.title-label'), { opacity: 0 })
      .from(target.querySelector('.title'), { opacity: 0 }, '-=0.25')
      .from(target.querySelector(' .line img'), { width: 0, opacity: 0 }, '<0.1')
      .from(target.querySelector(' .img-sm'), { scale: 0, opacity: 0 }, '<0.1')
      .from(target.querySelectorAll('.para'), { opacity: 0, stagger: 0.1 })
      .from(target.querySelector('.big-img'), { opacity: 0 }, '<0.1')
      .from(target.querySelector(' .btn-trans'), { opacity: 0 }, '<0.1')
      .from(target.querySelectorAll('.about-us-list li'), { opacity: 0, scale: 0.5, stagger: 0.1 }, '<0.2')
      .from(target.querySelectorAll('.about-us-list li .number'), {
        textContent: 1,
        ease: "power1.in",
        stagger: 0.1,
        snap: { textContent: 1 }
      }, '-=0.1');


  }


  aboutUsData = [
    {
      cardIcon: '../../../../assets/images/about-icons/webPageIcon.png',
      count: '375+',
      description: 'Website and IT Projects Delivered'
    },
    {
      cardIcon: '../../../../assets/images/about-icons/revenueIcon.png',
      count: '1.6B',
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
