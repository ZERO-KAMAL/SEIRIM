import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
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
