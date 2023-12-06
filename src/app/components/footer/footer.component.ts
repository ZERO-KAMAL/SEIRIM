import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('footerContentAnimation', { static: true }) footerContentAnimation!: ElementRef;


  ngAfterViewInit() {
    this.playTopRightItemAnimation();
  }


  playTopRightItemAnimation() {

    // Obtain the reference to the second element
    const fotterContent = this.footerContentAnimation.nativeElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: fotterContent,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none"
      },
      defaults: { duration: 0.3 },
    });



    tl.from(fotterContent.querySelectorAll('.main-links a'), {  stagger: 0.1 })
      .from(fotterContent.querySelectorAll(' .footer-links'), { opacity: 0, stagger: 0.1 },)
  }
}


