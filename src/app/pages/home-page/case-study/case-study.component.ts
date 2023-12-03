import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { SectionTitleAnimationsService } from 'src/app/service/section-title-animation.service';
// import { SectionAnimationsService } from 'src/app/service/section-animation.service';
import gsap from 'gsap';

import Swiper from 'swiper';

@Component({
  selector: 'case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements AfterViewInit {
  @ViewChild('sectionTitleAnimation', { static: true }) sectionTitleAnimation!: ElementRef;
  @ViewChild('caseStudySwiperDevContainer') caseStudySwiperDevContainer!: ElementRef;

  @ViewChild('cybercaseStudyContentAnimation', { static: true }) cybercaseStudyContentAnimation!: ElementRef;
  @ViewChild('devCaseStudyContentAnimation', { static: true }) devCaseStudyContentAnimation!: ElementRef;
  @ViewChild('digitalCaseStudyContentAnimation', { static: true }) digitalCaseStudyContentAnimation!: ElementRef;

  @ViewChild('sectionBgAnimation', { static: true }) sectionBgAnimation!: ElementRef;

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


  tabs: string[] = ["all", "Video Production", "3d animation", 'virtual reality', 'seo', 'graphic design'];
  currentTabIndex: number = 0;

  onTabSelected(index: number): void {
    this.currentTabIndex = index;
  }

  constructor(private animationService: SectionTitleAnimationsService, private el: ElementRef) { }

  ngAfterViewInit(): void {

    const targetElement = this.sectionTitleAnimation.nativeElement;
    const tl = this.animationService.playSectionTitleGlobalAnimation(targetElement);

    const caseStudyDevSwiper = new Swiper(this.caseStudySwiperDevContainer.nativeElement, {
      centeredSlides: true,
      slidesPerView: 1,
      grabCursor: true,
      freeMode: false,
      loop: true,
      mousewheel: false,
      keyboard: {
        enabled: true
      },
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
      // Responsive breakpoints
      breakpoints: {
        1024: {
          slidesPerView: 1.5,
          spaceBetween: 20
        }
      }
    });

    this.playCaseStudyContentAnimation();

  }

  playCaseStudyContentAnimation() {


    // Obtain the reference to the second element
    const cyberCaseStyudyContent = this.cybercaseStudyContentAnimation.nativeElement;
    const devCaseStyudyContent = this.devCaseStudyContentAnimation.nativeElement;
    const digitalCaseStyudyContent = this.digitalCaseStudyContentAnimation.nativeElement;




    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: [cyberCaseStyudyContent],
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
      },
      defaults: { duration: 0.3 },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: [devCaseStyudyContent],
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none"
      },
      defaults: { duration: 0.3 },
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: [digitalCaseStyudyContent],
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none"
      },
      defaults: { duration: 0.3 },
    });

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: devCaseStyudyContent, // Make sure this is a selector string or DOM element
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse"
      },
      defaults: {
        duration: 0.1
      },
    });

    tl4.fromTo(".case-study", { backgroundColor: "white" }, { backgroundColor: "#090C18" })
      .fromTo(".case-study .section-title .title", { color: "#090C18" }, { color: "white" })
      .fromTo(".case-study .para", { color: "#090C18" }, { color: "white" })
      .fromTo(".case-study .btn-trans span", { color: "#090C18" }, { color: "white" })
      .fromTo(".case-study .card-title", { color: "#090C18" }, { color: "white" })
      .fromTo(".case-study .card-des", { color: "#090C18" }, { color: "white" })
      .fromTo(".case-study .tabs .tab-item span", { color: "#090C18" }, { color: "white" })


    tl1
      .from(cyberCaseStyudyContent.querySelector('.section-title .title-label'), { opacity: 0 })
      .from(cyberCaseStyudyContent.querySelector('.section-title .title'), { opacity: 0 }, '-=0.1')
      .from(cyberCaseStyudyContent.querySelector(' .img-sm'), { scale: 0, opacity: 0 }, '-=0.1')
      .from(cyberCaseStyudyContent.querySelectorAll(' .para'), { opacity: 0, duration: 0.2 })
      .from(cyberCaseStyudyContent.querySelector(' .btn-trans'), { opacity: 0, ease: 'elastic.out(1, 0.3)' })
      .from(cyberCaseStyudyContent.querySelectorAll('.blog-list li'), { y: 50, opacity: 0, stagger: 0.1 })

    tl2
      .from(devCaseStyudyContent.querySelector('.section-title .title-label'), { opacity: 0 })
      .from(devCaseStyudyContent.querySelector('.section-title .title'), { opacity: 0 }, '-=0.1')
      .from(devCaseStyudyContent.querySelector(' .img-sm'), { scale: 0, opacity: 0 }, '-=0.1')
      .from(devCaseStyudyContent.querySelectorAll(' .para'), { opacity: 0, duration: 0.2 })
      .from(devCaseStyudyContent.querySelector(' .btn-trans'), { opacity: 0, ease: 'elastic.out(1, 0.3)' })
      .from(devCaseStyudyContent.querySelectorAll('.swiper-slide'), { opacity: 0, stagger: 0.1 })
      .from(devCaseStyudyContent.querySelector('.slider-actions'), { y: 50, opacity: 0 });

    tl3.from(digitalCaseStyudyContent.querySelector('.section-title .title-label'), { opacity: 0 })
      .from(digitalCaseStyudyContent.querySelector('.section-title .title'), { opacity: 0 }, '-=0.1')
      .from(digitalCaseStyudyContent.querySelectorAll('.tabs'), { opacity: 0, stagger: 0.1 })
      .from(digitalCaseStyudyContent.querySelectorAll('.tab-content'), { opacity: 0, stagger: 0.1 })
  }
}
