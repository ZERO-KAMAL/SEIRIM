import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'inquire',
  templateUrl: './inquire.component.html',
  styleUrls: ['./inquire.component.scss']
})
export class InquireComponent implements AfterViewInit {
  @ViewChild('inquireContentAnimation', { static: true }) inquireContentAnimation!: ElementRef;


  ngAfterViewInit() {
    this.playInquireContentAnimation();
  }


  playInquireContentAnimation() {

    // Obtain the reference to the second element
    const inquireContent = this.inquireContentAnimation.nativeElement;

    const originalTextElement = inquireContent.querySelector('.inquire-heading span');
    const originalText = originalTextElement?.textContent ?? '';
    const uniqueChars = Array.from(new Set(originalText.replace(/\s/g, ''))).join('');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: inquireContent,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none"
      },
      defaults: { duration: 0.3 },
    });


    tl.from(inquireContent.querySelector('.inquire-heading span'), {
      // opacity: 0,
      duration: 2,
      scrambleText: {
        text: originalText,
        chars: uniqueChars,
        revealDelay: 0.1,
        speed: 0.1,
      }

    })
      // .from(inquireContent.querySelector('.inquire-heading'), { opacity: 0 })
      .from(inquireContent.querySelector(' .line img'), { width: 0, opacity: 0 }, '-=0.1')
      .from(inquireContent.querySelector(' .inquire-para'), { opacity: 0 }, '-=0.1')
      .from(inquireContent.querySelector(' .btn-trans'), { opacity: 0, ease: 'elastic.out(1, 0.3)' })
  }
}
