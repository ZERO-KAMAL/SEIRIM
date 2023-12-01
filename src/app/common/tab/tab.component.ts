import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  // imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  @Input() tabs: string[] = [];
  @Output() tabSelected = new EventEmitter<number>();

  selectedTabIndex: number | undefined = 0;

  selectTab(index: number) {
    this.selectedTabIndex = index;
    this.tabSelected.emit(index);
  }
}
