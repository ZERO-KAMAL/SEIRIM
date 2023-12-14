import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { gsap, Power1, Power2 } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('top', { static: false }) top!: ElementRef;
  @ViewChild('bottom', { static: false }) bottom!: ElementRef;
  @ViewChild('middle', { static: false }) middle!: ElementRef;
  @ViewChild('sidebar', { static: false }) sidebar!: ElementRef;
  @ViewChild('sideMenuLink', { static: false }) sideMenuLink!: ElementRef;
  @ViewChild('megaMenu', { static: true }) megaMenu!: ElementRef;

  //dummy data
  items = [
    {
      title: 'Cybersecurity Consulting',
      description:
        'Systematic exploration of a scenario to assess and prescribe solutions.',
    },
    {
      title: 'Data Analysis',
      description:
        'In-depth review and interpretation of data to drive actionable insights.',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Scalable and secure cloud services for business agility and growth.',
    },
    {
      title: 'Network Infrastructure',
      description:
        'Strategic planning and deployment of robust network systems.',
    },
    {
      title: 'Software Development',
      description:
        'Custom software solutions tailored to meet specific business needs.',
    },
    {
      title: 'Digital Marketing',
      description:
        'Integrated marketing strategies to enhance online presence and engagement.',
    },
    {
      title: 'Risk Management',
      description:
        'Identification and mitigation of potential risks to ensure business continuity.',
    },
    {
      title: 'E-commerce Solutions',
      description:
        'Comprehensive platforms for online sales and digital commerce.Comprehensive platforms for online sales and digital commerceComprehensive platforms for online sales and digital commerce',
    },
  ];
  
  isMegaMenuActive: boolean = false;

  tabs: string[] = [
    'cybersecurity',
    'it & web development',
    'digital marketing',
  ];
  currentTabIndex: number = 0;

  onTabSelected(index: number): void {
    this.currentTabIndex = index;
  }

  private tl: any;

  constructor() { }

  ngAfterViewInit() {
    this.tl = gsap
      .timeline({ paused: true, reversed: true })
      .to(this.top.nativeElement, 0.3, {
        y: 9,
        yoyo: true,
        ease: Power1.easeInOut,
      })
      .to(
        this.bottom.nativeElement,
        0.3,
        { y: -9, yoyo: true, ease: Power1.easeInOut },
        '-=0.3'
      )
      .to(this.top.nativeElement, 0.5, { rotation: 585 })
      .to(this.middle.nativeElement, 0.5, { rotation: 585 }, '-=0.5')
      .to(this.bottom.nativeElement, 0.5, { rotation: 675 }, '-=0.5')
      .to(
        [
          this.top.nativeElement,
          this.middle.nativeElement,
          this.bottom.nativeElement,
        ],
        0.1,
        { css: { borderColor: 'white' }, ease: Power1.easeOut },
        '-=1'
      )
      .to(
        this.sidebar.nativeElement,
        0.5,
        { width: '80%', ease: Power2.easeOut },
        '-=1'
      )
      .staggerFrom(
        this.sideMenuLink.nativeElement,
        0.3,
        { opacity: 0, y: 20, ease: Power1.easeOut },
        0.1
      );
  }

  toggleMenu() {
    this.tl.reversed() ? this.tl.play() : this.tl.reverse();
  }

  // Assuming you have a class property to store the original text
  private originalTextMap: Map<HTMLAnchorElement, string> = new Map();





  onHoverTextScramble(event: MouseEvent): void {
    const target = event.currentTarget as HTMLAnchorElement;
    const linkText: HTMLElement | null = target.querySelector('.link-name');

    if (linkText) {
      // Cancel any existing animations
      gsap.killTweensOf(linkText);

      // Clear properties to ensure a clean slate for the animation
      gsap.set(linkText, { clearProps: 'all' });

      // Store the original text if not already stored
      if (!this.originalTextMap.has(target)) {
        this.originalTextMap.set(target, linkText.innerText);
      }

      // Scramble animation
      gsap.to(linkText, {
        duration: 0.5,
        text: {
          value: this.scrambleText(this.originalTextMap.get(target) || ''),
          scrambleText: {
            chars: '01',
            speed: 0.1,
            ease: 'none',
          },
        } as any,
        onComplete: () => {
          // Animation completed, do nothing for now
          gsap.to(linkText, {
            duration: 0.5,
            text: {
              value: this.originalTextMap.get(target) || '',
            },
          });
        },
      });
    }
  }





  // Helper function to scramble the text randomly
  private scrambleText(text: string): string {
    const chars = text.split('');
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join('');
  }


  showMegaMenu(): void {

    this.isMegaMenuActive = !this.isMegaMenuActive;

    gsap.fromTo(
      this.megaMenu.nativeElement,
      // from state
      { height: 0, opacity: 0, overflow: 'hidden', display: 'none' },
      // to state with animation
      {
        height: 'auto', // or you can specify a fixed height in pixels
        opacity: 1,
        overflow: 'visible',
        display: 'block',
        duration: 0.2, // 200ms duration
        ease: 'ease-in-out'
      }
    );
  }

  hideMegaMenu(): void {
    
    this.isMegaMenuActive = !this.isMegaMenuActive;

    gsap.to(this.megaMenu.nativeElement, {
      height: 0,
      opacity: 0,
      overflow: 'hidden',
      duration: 0.2, // 200ms duration
      ease: 'ease-in-out',
      onComplete: () => {
        this.megaMenu.nativeElement.style.display = 'none';
      }
    });
  }
  
}
