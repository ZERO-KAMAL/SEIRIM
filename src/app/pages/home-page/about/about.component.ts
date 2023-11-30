import { Component, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('about', { static: true }) about!: ElementRef;
  @ViewChildren('aboutListItem') aboutListItems!: QueryList<ElementRef>;

  currentSlideIndex: number = 0;

  constructor() { }
  ngAfterViewInit() {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.about.nativeElement,
        start: "top center", // start the animation when "top" of the trigger hits the "center" of the viewport
        end: "bottom center", // end the animation when "bottom" of the trigger hits the "center" of the viewport
        toggleActions: "play none none none" // defines what happens to the animation at certain scroll points (play, pause, resume, reset)
      },
      defaults: { duration: .5 }
    });

    const originalTextElement = this.about.nativeElement.querySelector('.section-title .title');
    const originalText = originalTextElement ? originalTextElement.textContent : '';
    const uniqueChars = Array.from(new Set(originalText.replace(/\s/g, ''))).join('');

    // gsap

    // Add sequential animations
    tl.from(this.about.nativeElement.querySelector('.section-title .title-label'), { opacity: 0 })
      .from(this.about.nativeElement.querySelector('.section-title .title'), { opacity: 0 }, '-=0.2')
      .from(this.about.nativeElement.querySelector('.line img'), { width: 0, opacity: 0 }, '-=0.5')
      .from(this.about.nativeElement.querySelector('.img-sm'), { scale: 0, opacity: 0 }, '-=0.5')
      .from(this.about.nativeElement.querySelectorAll('.para'), {  opacity: 0, stagger: 0.2 })
      .from(this.about.nativeElement.querySelector('.btn-trans'), {  opacity: 0, ease: 'elastic.out(1, 0.3)' })
      .from(this.about.nativeElement.querySelector('.big-img'), { x: 100, opacity: 0, stagger: 0.2 })
      .to(this.about.nativeElement.querySelector('.section-title .title'), {
        duration: 2,
        scrambleText: {
          text: originalText,
          chars: uniqueChars,
          revealDelay: 0.2,
          speed: 0.1,
        }
      })

    this.aboutListItems.forEach((item, index) => {
      gsap.from(item.nativeElement, {
        duration: 0.5,
        scale: 0.5,
        opacity: 0,
        delay: index * 0.2, // Delays each item's animation slightly more than the previous one
        scrollTrigger: {
          trigger: item.nativeElement,
          start: "top bottom", // Animation starts when top of item hits the bottom of viewport
          toggleActions: "play none none none"
        }
      });
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
