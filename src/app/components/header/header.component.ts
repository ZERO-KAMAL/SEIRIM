import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // Assuming you have a class property to store the original text
  private originalTextMap: Map<HTMLAnchorElement, string> = new Map();

  constructor() {}











  

  handleHoverAnimationEnter(event: MouseEvent): void {
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
}
