import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-quiz-button',
  imports: [],
  templateUrl: './quiz-button.component.html',
  styleUrl: './quiz-button.component.scss',
})
export class QuizButtonComponent {
  leftButtonLabel = input<string>('Back');
  rightButtonLabel = input<string>('Next');
  prev = output<void>();
  next = output<void>();

  previous() {
    this.prev.emit();
  }

  forword() {
    this.next.emit();
  }
}
