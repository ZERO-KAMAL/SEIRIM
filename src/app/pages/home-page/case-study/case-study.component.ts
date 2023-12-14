import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements AfterViewInit {

  @ViewChild('sectionBgAnimation') sectionBgAnimation!: ElementRef;


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


  ngAfterViewInit(): void {

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
      defaults: { duration: 0.25, ease: 'power1.inOut' } // Reduced duration and altered ease
    });

    // Start color transitions simultaneously for a more cohesive feel
    tlBg
      .fromTo(".case-study", { backgroundColor: "#090C18" }, { backgroundColor: "white" }, "start")
      .fromTo(".case-study .section-title .title", { color: "white" }, { color: "#090C18" }, "start")
      .fromTo(".case-study .para", { color: "white" }, { color: "#090C18" }, "start")
      .fromTo(".case-study .btn-trans span", { color: "white" }, { color: "#090C18" }, "start")
      .fromTo(".case-study .card-title", { color: "white" }, { color: "#090C18" }, "start")
      .fromTo(".case-study .card-des", { color: "white" }, { color: "#090C18" }, "start");
  }

}
