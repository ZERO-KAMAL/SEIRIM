import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'development-case-study',
  templateUrl: './development-case-study.component.html',
  styleUrl: './development-case-study.component.scss'
})
export class DevelopmentCaseStudyComponent {

  @ViewChild('slider') slider!: ElementRef;

  slides = ['Slide 1', 'Slide 2', 'Slide 3']; // Replace with your content

  currentIndex = 0;


  constructor() { }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.animateSlider();
  }

  private animateSlider() {
    gsap.to(this.slider.nativeElement, {
      x: -(this.currentIndex * 100) + '%',
      duration: 1
    });
  }

}
