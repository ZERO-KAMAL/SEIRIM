import { Component, NgZone, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-loading',
  templateUrl: './app-loading.component.html',
  styleUrl: './app-loading.component.scss'
})
export class AppLoadingComponent implements OnInit {

  loadingPercentage: number = 0;
  displayPercentage: string = '0%';

  constructor(private zone: NgZone) {}

  ngOnInit() {
    const animation = gsap.to('.loading-fill', {
      width: '100%',
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        this.zone.run(() => {
          this.loadingPercentage = animation.progress() * 100;
          this.displayPercentage = `${this.round(this.loadingPercentage)}%`;
        });
      }
    });
  }

  round(value: number): number {
    return Math.trunc(value);
  }
}
