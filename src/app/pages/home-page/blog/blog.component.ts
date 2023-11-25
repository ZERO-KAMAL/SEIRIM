import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements AfterViewInit {

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
    // {
    //   blogImg:'../../../../assets/images/card-img.png',
    //   date: '08 Jan 2024',
    //   category: 'Cloud Computing',
    //   title: 'Getting Started with Cloud Services: AWS, Azure, and Google Cloud',
    //   description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    // },
    // {
    //   blogImg:'../../../../assets/images/card-img.png',
    //   date: '21 Feb 2024',
    //   category: 'UI/UX Design',
    //   title: 'Design Principles for Creating User-Centric Interfaces',
    //   description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
    // },
    // {
    //   blogImg:'../../../../assets/images/card-img.png',
    //   date: '06 Mar 2024',
    //   category: 'Blockchain',
    //   title: 'Understanding Blockchain Technology and Cryptocurrencies',
    //   description: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
    // },
  ];


  @ViewChild('sliderList', { static: true }) sliderList!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    // this.autoSlider();
  }

  currentSlideIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }
  get visibleItems() {
    const endIndex = (this.currentSlideIndex + 4) % this.sliderData.length;
    if (this.currentSlideIndex <= endIndex) {
      return this.sliderData.slice(this.currentSlideIndex, endIndex);
    } else {
      return [
        ...this.sliderData.slice(this.currentSlideIndex),
        ...this.sliderData.slice(0, endIndex),
      ];
    }
  }

  isAnimating: boolean = false;

  // Modify the previous slide method
  prevSlide() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      const prevIndex = (this.currentSlideIndex - 1 + this.sliderData.length) % this.sliderData.length;
      this.animateSlide(prevIndex, -1);
    }
  }

  // Modify the next slide method
  nextSlide() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      const nextIndex = (this.currentSlideIndex + 1) % this.sliderData.length;
      this.animateSlide(nextIndex, 1);
    }
  }

  animateSlide(targetIndex: number, direction: number) {
    const slidesInView = 3; // Number of slides visible at a time
  
    gsap.to(this.sliderList.nativeElement.children, {
      duration: 0.5,
      x: -direction * 100,
      opacity: 0,
      stagger: {
        amount: 0.2, // Adjust the stagger amount for a smoother transition
      },
      ease: 'power2.inOut', // Use an easing function for a smoother animation
    });
  
    gsap.fromTo(this.sliderList.nativeElement.children, {
      x: direction * 100,
      opacity: 0,
    }, {
      duration: 0.5,
      x: 0,
      opacity: 1,
      stagger: {
        amount: 0.2, // Adjust the stagger amount here as well
      },
      ease: 'power2.inOut', // Use the same easing function
      onComplete: () => {
        this.currentSlideIndex = targetIndex;
        this.isAnimating = false;
      },
    });
  }
  
}
