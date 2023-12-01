import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit, AfterViewInit {


  slides = [
    {
      title: 'Cybersecurity',
      subtitle: 'Solutions',
      content: 'We help leading companies worldwide keep their digital realms secure via hands-on consulting, vulnerability management, penetration testing and more.',
      buttonLabel: 'Get Secure',
    },
    {
      title: 'IT & Web',
      subtitle: 'Development',
      content: 'Custom programming for advanced and high performance demands including e-commerce and custom corporate applications and presentations.',
      buttonLabel: 'Build Together',
    },
    {
      title: 'Digital',
      subtitle: 'Marketing',
      content: 'Take advantage of our highly skilled teams in Video Production, SEO, Virtual Reality, 3D Animation and all manner of marketing materials design.',
      buttonLabel: 'Promote Effectively',
    },
    // Add more slides as needed
  ];

  //slider
  currentIndex = 0;
  private interval: any;

  setActiveIndex(index: number): void {
    this.currentIndex = index;
  }

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startAutoSlide(): void {
    this.interval = setInterval(() => this.onNextSlide(), 5000);
  }

  onNextSlide(): void {
    this.changeSlide(1);
  }

  onNextClick(): void {
    this.stopAutoSlide();
    this.changeSlide(1);
  }

  onPrevClick(): void {
    this.stopAutoSlide();
    this.changeSlide(-1);
  }

  private changeSlide(direction: number): void {
    const lastIndex = this.slides.length - 1;
    this.currentIndex =
      (this.currentIndex + direction + this.slides.length) % this.slides.length;
    this.animateSlide();
  }

  private stopAutoSlide(): void {
    clearInterval(this.interval);
  }

  animateSlide(): void {
    gsap.fromTo('.slide-content', { opacity: 0 }, { opacity: 1, duration: 2 });
    this.animationText();
  }

  ngAfterViewInit(): void {
    // Define targets for animations
    const targets = {
      bannerContentRight: this.el.nativeElement.querySelector('.banner-content-right'),
      bannerContentLeft: this.el.nativeElement.querySelector('.banner-content-left'),
      paragraph: this.el.nativeElement.querySelector('.banner-content-left p'),
      btnBanner: this.el.nativeElement.querySelector('.banner-content-left .btn-trans'),
      sliderIndicator: this.el.nativeElement.querySelectorAll('.banner-content-left .slider-indicator > *'),
      bannerContentLeftTitle: this.el.nativeElement.querySelector('.banner-content-left h1'),
    };

    // Run animations with the GSAP timeline
    const tl = gsap.timeline();
    tl.from(targets.bannerContentLeftTitle, { opacity: 0, ease: 'power2.out', delay: 0.4 })
      .from(targets.paragraph, { opacity: 0, ease: 'power2.out' }, '-=0.1')
      .from(targets.btnBanner, { opacity: 0, ease: 'power2.out' }, '-=0.1')
      .from(targets.sliderIndicator, { opacity: 0, stagger: 0.1, ease: 'power2.out' }, '-=0.1')
      .from(targets.bannerContentRight, { x: 100, opacity: 0, ease: 'power2.out' });

    this.animationText();

  }

  animationText() {
    const spanElement = this.el.nativeElement.querySelector('h1 span');
    const strongElement = this.el.nativeElement.querySelector('h1 strong');

    if (spanElement) {
      this.scrambleAnimationText(spanElement, 0.2, 0.1, this.currentIndex, 'title');
    }
    if (strongElement) {
      this.scrambleAnimationText(strongElement, 0.3, 0.2, this.currentIndex, 'subtitle');
    }
  }

  scrambleAnimationText(element: Element, revealDelay: number, speed: number, index: number, property: 'title' | 'subtitle') {
    const originalText = this.slides[index][property] || '';
    const uniqueChars = Array.from(new Set(originalText.replace(/\s/g, ''))).join('');

    gsap.to(element, {
      duration: 1,
      scrambleText: {
        text: originalText,
        chars: uniqueChars,
        revealDelay: revealDelay,
        speed: speed,
      }
    });
  }


}

