import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import gsap from 'gsap';

@Component({
  selector: 'case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements AfterViewInit {

  @ViewChild('sectionBgAnimation') sectionBgAnimation!: ElementRef;

  // @ViewChild('developmentSwiperContainer') developmentSwiperContainer!: ElementRef;
  @ViewChild('digitalSwiperContainer') digitalSwiperContainer!: ElementRef;

  sliderData = [
    {
      cardImg: '../../../../assets/images/card-img.png',
      category: 'Cyber Security',
      title: 'Incident Response for Ransomware Attack - Health Care Company',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Volutpat commodo sed egestas egestas fringilla phasellus.'
    },
    {
      cardImg: '../../../../assets/images/case-img.png',
      category: 'Web Development',
      title: 'Risk Assessment and Consulting - B2B Industrial Corporation',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Volutpat commodo sed egestas egestas fringilla phasellus.'
    },
    {
      cardImg: '../../../../assets/images/card-img.png',
      category: 'Data Science',
      title: 'System Hardening and Network Configuration - SaaS Company',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Volutpat commodo sed egestas egestas fringilla phasellus.'
    },
  ];


  // Declare Swiper variable
  // developmentSwiper: Swiper | undefined;
  digitalSwiper: Swiper | undefined;

  constructor() { }


  ngAfterViewInit(): void {

    // const developmentSwiper = new Swiper(this.developmentSwiperContainer.nativeElement, {
    //   slidesPerView: 1,
    //   centeredSlides: true,
    //   spaceBetween: 10,
    //   grabCursor: true,
    //   direction: 'vertical',
    //   loop: true,
    //   navigation: {
    //     nextEl: '.btn-next',
    //     prevEl: '.btn-prev',
    //   },
    // });

    const digitalSwiper = new Swiper(this.digitalSwiperContainer.nativeElement, {
      // slidesPerView: 1,
      loop: true,
      speed: 1000,
      effect: 'coverflow',
      centeredSlides: true,
      spaceBetween: 10,
      grabCursor: true,
      slidesPerView: 'auto',
      coverflowEffect: { rotate: 0, stretch: 80, depth: 100, modifier: 4, },
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
    });

    this.playCaseStudyContentAnimation();

  }

  playCaseStudyContentAnimation() {
    const sectionBgChange = this.sectionBgAnimation.nativeElement;

    const tlBg = gsap.timeline({
      scrollTrigger: {
        trigger: sectionBgChange,
        start: "top top",
        end: "bottom center",
        toggleActions: "play reverse play reverse"
      },
      defaults: {
        duration: 0.1
      },
    });

    tlBg.fromTo(".case-study", { backgroundColor: "#090C18" }, { backgroundColor: "white" })
      .fromTo(".case-study .section-title .title", { color: "white" }, { color: "#090C18" })
      .fromTo(".case-study .para", { color: "white" }, { color: "#090C18" })
      .fromTo(".case-study .btn-trans span", { color: "white" }, { color: "#090C18" })
      .fromTo(".case-study .card-title", { color: "white" }, { color: "#090C18" })
      .fromTo(".case-study .card-des", { color: "white" }, { color: "#090C18" })
  }

}
