import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

/* The following plugin is a Club GSAP perk */
// import { gsap, ScrambleTextPlugin } from "gsap-trial/all";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  {

  // @ViewChild('animatedText') animatedTextRef!: ElementRef<HTMLDivElement>;

  // constructor() {
  //   gsap.registerPlugin(ScrambleTextPlugin);
  // }

  // ngAfterViewInit() {
  //   // The view has been initialized, so this.animatedTextRef is now available.
  //   const element = this.animatedTextRef.nativeElement;
  //   const initialText = element.textContent || ''; // Provide a fallback to empty string

  //   gsap.to(element, {
  //     duration: 2,
  //     scrambleText: {
  //       text: initialText,
  //       speed: 0.3,
  //       revealDelay: 0.5,
  //       tweenLength: false,
  //       chars: 'lowerCase'
  //     },
  //     ease: 'none'
  //   });
  // }

}

// ngAfterViewInit() {
//   this.scrambleText(this.animatedTextRef.nativeElement, 0.5, 0.1);
// }

// scrambleText(element: HTMLElement, duration: number, updateInterval: number) {
//   const originalText = element.textContent ?? '';
//   const scramblePeriods = duration / updateInterval;
//   let counter = 0;

//   const intervalId = setInterval(() => {
//     element.textContent = this.shuffleText(originalText);
//     counter++;

//     if (counter >= scramblePeriods) {
//       clearInterval(intervalId);
//       element.textContent = originalText; // Restore the original text at the end
//     }
//   }, updateInterval * 1000);
// }

// shuffleText(text: string): string {
//   const characters = text.split('');
//   for (let i = characters.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [characters[i], characters[j]] = [characters[j], characters[i]];
//   }
//   return characters.join('');
// }
