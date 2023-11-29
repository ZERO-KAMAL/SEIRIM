import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;

  ngOnInit() {
    // Simulate an asynchronous operation (e.g., HTTP request)
    setTimeout(() => {
      // Set isLoading to false to hide the loading component
      this.isLoading = false;
    }, 2000); // Adjust the time as needed


    ScrollSmoother.create({
      wrapper: ".main",
      content: ".main-container",
      smooth: 1.5,
      effects: true,
    });
  }


}
