// animations.service.ts
import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
    providedIn: 'root',
})
export class SectionTitleAnimationsService {
    constructor() {
        // Register the ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
    }
    playSectionTitleGlobalAnimation(target: HTMLElement) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: target,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none"
            },
            defaults: { duration: 0.3 },
        });

        const originalTextElement = target.querySelector('.section-title .title');
        const originalText = originalTextElement?.textContent ?? '';

        const uniqueChars = Array.from(new Set(originalText.replace(/\s/g, ''))).join('');


        tl.from(target.querySelector('.title-label'), { opacity: 0 })
            // .from(target.querySelector('.title'), {
            //     opacity: 0,
            //     duration: 2,
            //     scrambleText: {
            //         text: originalText,
            //         chars: uniqueChars,
            //         revealDelay: 0.1,
            //         speed: 0.1,
            //     }

            // }, '-=0.1')
            .from(target.querySelector('.title'), { opacity: 0 }, '-=0.1')
            .from(target.querySelector('.line img'), { width: 0, opacity: 0 }, '-=0.1')
            .from(target.querySelector('.para'), { opacity: 0, stagger: 0.2 })
            .from(target.querySelector('.tabs'), { opacity: 0, stagger: 0.2 })


        return tl;
    }

}