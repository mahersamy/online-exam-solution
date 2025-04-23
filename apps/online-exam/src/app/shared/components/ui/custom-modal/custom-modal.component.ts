import { Component, EventEmitter, input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  imports: [],
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss'
})
export class CustomModalComponent {
  visable=input.required<boolean>()
  @Output() closed = new EventEmitter<void>();


  close(event: MouseEvent) {
    if ((event.target as HTMLElement).id === 'modal-outline') {
      this.closed.emit(); 
    }
  }

}
