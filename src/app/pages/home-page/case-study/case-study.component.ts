import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
// import { SectionAnimationsService } from 'src/app/service/section-animation.service';

import Swiper from 'swiper';

@Component({
  selector: 'case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements AfterViewInit {

  // @ViewChild('sectionAnimation') sectionAnimation!: ElementRef;
  @ViewChild('caseStudyDevContainer') caseStudyDevContainer!: ElementRef;


  sliderData = [
    {
      cardImg: '../../../../assets/images/card-img.png',
      category: 'Cyber Security',
      title: 'Cybersecurity: Protecting Your Digital Life in an Online World',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      cardImg: '../../../../assets/images/case-img.png',
      category: 'Web Development',
      title: 'Building Modern Web Applications with Angular',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      cardImg: '../../../../assets/images/card-img.png',
      category: 'Data Science',
      title: 'Introduction to Data Analysis and Visualization with Python',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
  ];

  // Declare Swiper variable
  caseStudyDevSwiper: Swiper | undefined;

  // constructor(private animationService: SectionAnimationsService) {}

  ngAfterViewInit(): void {
    // const targetElement = this.sectionAnimation.nativeElement;

    // // Use the animation service to apply the global animation
    // const tl = this.animationService.playSectionGlobalAnimation(targetElement);


    const caseStudyDevSwiper = new Swiper(this.caseStudyDevContainer.nativeElement, {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 50,
        }
      },
    });
  }


}
