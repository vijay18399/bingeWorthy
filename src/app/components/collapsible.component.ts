import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-panel',
  template: `
      <div class="collapsible-panel">
        <div class="panel-header" (click)="isExpanded = !isExpanded">
          {{ title }}
          <i class="panel-ico fa" [ngClass]="isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
        </div>
        <div class="panel-content" [ngClass]="isExpanded ? 'expanded' : 'collapsed'">
          <ng-content></ng-content>
        </div>
      </div>
  `,
  styles: [`

  .collapsible-panel {

  border: 1px solid #ddd;
  margin-bottom: 10px;
}

.panel-header {
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.panel-icon {
  font-size: 18px;
  transition: transform 0.3s;
}

.panel-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;
}

.expanded {
  max-height: 1000px; /* Adjust this value to a height that fits your content */
}

  `]
})
export class CollapsiblePanelComponent {
  @HostBinding('class.wid90') myCustomClass: boolean = true;
  @Input() title: string = '';
  @Input() isExpanded: boolean = false;
}
