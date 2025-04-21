import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quiz-score-correct-number',
  imports: [],
  templateUrl: './quiz-score-correct-number.component.html',
  styleUrl: './quiz-score-correct-number.component.scss',
})
export class QuizScoreCorrectNumberComponent {
  correctNum = input.required<number>();
  wrongNum = input.required<number>();
}
