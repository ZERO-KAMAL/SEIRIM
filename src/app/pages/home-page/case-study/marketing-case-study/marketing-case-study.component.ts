import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'marketing-case-study',
  templateUrl: './marketing-case-study.component.html',
  styleUrl: './marketing-case-study.component.scss'
})
export class MarketingCaseStudyComponent {
  @ViewChild('slider') slider!: ElementRef;

  slides = ['Slide 1', 'Slide 2', 'Slide 3']; // Replace with your content

  currentIndex = 0;


  constructor() { }
  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this.animateSlider();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.animateSlider();
    }
  }

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
