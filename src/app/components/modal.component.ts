import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  template: `
    <div class="modal-overlay" (click)="closeModal()"></div>
    <div class="modal-container">
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button class="close-button" (click)="closeModal()">&times;</button>
      </div>
      <div class="modal-content">
        <!-- Place your modal content here -->
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      /* Styles for the modal overlay (e.g., backdrop) */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }

    .modal-container {
      /* Styles for the modal container */
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      z-index: 1000;
    }

    .modal-header {
      /* Styles for the modal header */
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid #ccc;
    }

    .modal-header h2 {
      margin: 0;
    }

    .close-button {
      /* Styles for the close button */
      background: none;
      border: none;
      cursor: pointer;
      font-size: 24px;
      color: #999;
    }

    .modal-content {
      /* Styles for the modal content */
      padding: 16px;
    }
  `]
})
export class ModalComponent {
  @Input() title!: string;
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
