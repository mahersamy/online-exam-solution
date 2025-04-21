import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quiz-stepper',
  imports: [],
  templateUrl: './quiz-stepper.component.html',
  styleUrl: './quiz-stepper.component.scss',
})
export class QuizStepperComponent {
  quizesLength = input.required<number>();
  currentQuizNumber = input.required<number>();
}
