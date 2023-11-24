import { Component, AfterViewInit, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';

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
  interval: any;

  setActiveIndex(index: number): void {
    this.currentIndex = index;
  }

  constructor(private el: ElementRef) { }


  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.interval = setInterval(() => {
      this.onNextSlide();
    }, 5000);
  }

  onNextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.animateSlide();
  }
  onNextClick(): void {
    clearInterval(this.interval);
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.animateSlide();
  }
  onPrevClick(): void {
    clearInterval(this.interval);
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.animateSlide();
  }

  animateSlide(): void {
    gsap.fromTo('.slide-content', { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 2 });
  }



  ngAfterViewInit(): void {
    // Get the elements to animate
    const bannerContentRight = this.el.nativeElement.querySelector('.banner-content-right');
    const bannerContentLeft = this.el.nativeElement.querySelector('.banner-content-left');
    const bannerContentLeftTitle = bannerContentLeft.querySelector('h1');
    const p = bannerContentLeft.querySelector('p');
    const btnBanner = bannerContentLeft.querySelector('.btn-trans');
    const sliderIndicator = bannerContentLeft.querySelector('.slider-indicator');

    // GSAP animation
    gsap.timeline()
      .from(bannerContentLeftTitle, { duration: 0.6, opacity: 0, ease: 'power2.out', delay: 0.4 }) // Delay the h1 animation by 0.2 seconds
      .from(p, { duration: 0.4, opacity: 0, ease: 'power2.out' }, '-=0.2') // Starts 0.2 seconds after the previous animation
      .from(btnBanner, { duration: 0.4, opacity: 0, ease: 'power2.out' }, '-=0.2') // Starts 0.2 seconds after the previous animation
      .from(sliderIndicator.children, { duration: 0.4, opacity: 0, ease: 'power2.out' }, '-=0.2') // Staggered animation for slider indicators
      .from(bannerContentRight, { duration: 0.4, y: 10, opacity: 0, ease: 'power2.out' }); // Adjusted easing and duration for a smoother transition

  }


}

