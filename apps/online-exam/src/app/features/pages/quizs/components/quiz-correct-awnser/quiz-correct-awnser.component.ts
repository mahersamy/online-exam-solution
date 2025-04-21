import { Component, input, output } from '@angular/core';
import { CustomModalComponent } from '../../../../../shared/components/ui/custom-modal/custom-modal.component';
import { QuizResponse } from '../../../../../shared/interfaces/quiz/quiz-response';
import { CorrectAnswer } from '../../../../../shared/interfaces/quiz/correct-awnser';

@Component({
  selector: 'app-quiz-correct-awnser',
  imports: [CustomModalComponent],
  templateUrl: './quiz-correct-awnser.component.html',
  styleUrl: './quiz-correct-awnser.component.scss',
})
export class QuizCorrectAwnserComponent {
  wrongAnswerArray = input.required<Array<CorrectAnswer>>();
  quizs = input.required<Array<QuizResponse>>();
  visable = input.required<boolean>();
  close = output<void>();

  closeModalHandler() {
    this.close.emit();
  }
}
