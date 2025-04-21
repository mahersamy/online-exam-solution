import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quiz-title',
  imports: [],
  templateUrl: './quiz-title.component.html',
  styleUrl: './quiz-title.component.scss',
})
export class QuizTitleComponent {
  title = input.required<string>();
}
