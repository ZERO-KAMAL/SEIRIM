import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';

import gsap from 'gsap';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements AfterViewInit {

  @ViewChild('blogSwiperContainer') blogSwiperContainer!: ElementRef;

  @ViewChild('blogContentAnimation') blogContentAnimation!: ElementRef;

  @ViewChild('loadingIndicator') loadingIndicator!: ElementRef<HTMLDivElement>;



  sliderData = [
    {
      blogImg: '../../../../assets/images/card-img.png',
      date: '04 Aug 2023',
      category: 'Cyber Security',
      title: 'Cybersecurity: Protecting Your Digital Life in an Online World',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      blogImg: '../../../../assets/images/card-img.png',
      date: '15 Sep 2023',
      category: 'Web Development',
      title: 'Building Modern Web Applications with Angular',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      blogImg: '../../../../assets/images/card-img.png',
      date: '28 Oct 2023',
      category: 'Data Science',
      title: 'Introduction to Data Analysis and Visualization with Python',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      blogImg: '../../../../assets/images/card-img.png',
      date: '12 Nov 2023',
      category: 'Mobile App Development',
      title: 'Creating Cross-Platform Mobile Apps with React Native',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      blogImg: '../../../../assets/images/card-img.png',
      date: '25 Dec 2023',
      category: 'Machine Learning',
      title: 'Machine Learning Algorithms: A Practical Approach',
      description: 'Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
    },
    {
      blogImg: '../../../../assets/images/card-img.png',
      date: '08 Jan 2024',
      category: 'Cloud Computing',
      title: 'Getting Started with Cloud Services: AWS, Azure, and Google Cloud',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      blogImg: '../../../../assets/images/card-img.png',
      date: '21 Feb 2024',
      category: 'UI/UX Design',
      title: 'Design Principles for Creating User-Centric Interfaces',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
    },
    {
      blogImg: '../../../../assets/images/card-img.png',
      date: '06 Mar 2024',
      category: 'Blockchain',
      title: 'Understanding Blockchain Technology and Cryptocurrencies',
      description: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
    },
  ];


  // Declare Swiper variable
  blogSwiper: Swiper | undefined;

  constructor() { }

  ngAfterViewInit(): void {

    const blogSwiper = new Swiper(this.blogSwiperContainer.nativeElement, {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 3000, // Delay in milliseconds before the next slide is automatically shown
        disableOnInteraction: false, // Do not disable autoplay after user interactions
      },
      speed: 1500,
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
      breakpoints: {
        767: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      },
      on: {
        autoplayStart: () => this.animateLoadingIndicator(),
        slideNextTransitionStart: () => this.animateLoadingIndicator(),
        slidePrevTransitionStart: () => this.animateLoadingIndicator(),
      }
    });

    this.playOfferContentAnimation();
  }

  animateLoadingIndicator(): void {
    gsap.fromTo(
      this.loadingIndicator.nativeElement,
      { width: '0%' },
      {
        width: '100%',
        duration: 5,
        onComplete: () => {
          // Reset width after animation completion
          gsap.set(this.loadingIndicator.nativeElement, { width: '0%' });
        }
      }
    );
  }


  playOfferContentAnimation() {


    // Obtain the reference to the second element
    const blogContent = this.blogContentAnimation.nativeElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: blogContent,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none"
      },
      defaults: { duration: 0.3 },
    });

    // Define the animation for the second element (top-right-item)
    tl
      .from(blogContent.querySelector('.section-title .title-label'), { opacity: 0 })
      .from(blogContent.querySelector('.section-title .title'), { opacity: 0 }, '-=0.1')
      .from(blogContent.querySelector(' .line img'), { width: 0, opacity: 0 }, '-=0.1')
      .from(blogContent.querySelector(' .btn-trans'), { opacity: 0, ease: 'elastic.out(1, 0.3)' })
      .from(blogContent.querySelectorAll('.swiper-slide'), { y: 50, opacity: 0, stagger: 0.1 })
      .from(blogContent.querySelectorAll('.slider-actions'), { y: 50, opacity: 0 })
  }

}
