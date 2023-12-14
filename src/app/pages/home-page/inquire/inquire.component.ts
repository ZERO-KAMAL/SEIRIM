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
      defaults: { duration: 0.3, ease: "power2.out" }, 
    });

    // ScrambleText effect
    tl.from(inquireContent.querySelector('.inquire-heading span'), {
      duration: 1.5, 
      scrambleText: {
        text: originalText,
        chars: uniqueChars,
        revealDelay: 0.4,
        speed: 0.3, 
        // ease: "power2.out" // Consistent easing
      }
    })
      .from(inquireContent.querySelector(' .line img'), { width: 0, opacity: 0 }, '-=0.5') 
      .from(inquireContent.querySelector(' .inquire-para'), { opacity: 0, y: 20 }, '-=0.4') 
      .from(inquireContent.querySelector(' .btn-trans'), { opacity: 0, y: 20 }); 
  }
}
