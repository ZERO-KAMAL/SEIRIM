import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('sliderList', { static: true }) sliderList!: ElementRef<HTMLSpanElement>;

  currentSlideIndex: number = 0;

  constructor() { }

  ngAfterViewInit() {
    gsap.to(this.sliderList.nativeElement, {
      duration: 1,
      rotation: 360,
      opacity: 1, 
      delay: 0.5, 
      stagger: 0.2,
      ease: "sine.out", 
      force3D: true
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
