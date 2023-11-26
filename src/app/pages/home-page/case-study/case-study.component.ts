import { Component } from '@angular/core';

@Component({
  selector: 'case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent {
  sliderData = [
    {
      cardImg: '../../../../assets/images/card-img.png',
      category: 'Cyber Security',
      title: 'Cybersecurity: Protecting Your Digital Life in an Online World',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      cardImg: '../../../../assets/images/case-img.png',
      category: 'Web Development',
      title: 'Building Modern Web Applications with Angular',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      cardImg: '../../../../assets/images/card-img.png',
      category: 'Data Science',
      title: 'Introduction to Data Analysis and Visualization with Python',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
  ];
}
