// animations.service.ts
import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
    providedIn: 'root',
})
export class SectionAnimationsService {
    constructor() {
        // Register the ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
    }
    playSectionGlobalAnimation(target: HTMLElement) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: target,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none"
            },
            defaults: { duration: 0.5 },
        });

        const originalTextElement = target.querySelector('.section-title .title');
        const originalText = originalTextElement?.textContent ?? '';

        const uniqueChars = Array.from(new Set(originalText.replace(/\s/g, ''))).join('');

        tl.from(target.querySelector('.section-title .title-label'), { opacity: 0 })
            .from(target.querySelector('.section-title .title'), { opacity: 0 }, '-=0.2')
            .from(target.querySelector('.line img'), { width: 0, opacity: 0 }, '-=0.5')
            .from(target.querySelector('.img-sm'), { scale: 0, opacity: 0 }, '-=0.5')
            .from(target.querySelectorAll('.para'), { opacity: 0, stagger: 0.2 })
            .from(target.querySelector('.btn-trans'), { opacity: 0, ease: 'elastic.out(1, 0.3)' })
            .from(target.querySelector('.big-img'), { x: 100, opacity: 0, stagger: 0.2 })
            .to(target.querySelector('.section-title .title'), {
                duration: 2,
                scrambleText: {
                    text: originalText,
                    chars: uniqueChars,
                    revealDelay: 0.2,
                    speed: 0.1,
                }
            });

        return tl;
    }

}