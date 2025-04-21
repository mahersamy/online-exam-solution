import {
  Component,
  effect,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { CustomModalComponent } from '../../../shared/components/ui/custom-modal/custom-modal.component';
import { QuizService } from '../../../shared/services/quiz/quiz.service';
import { QuizResponse } from '../../../shared/interfaces/quiz/quiz-response';
import { CustomTimerComponent } from '../../../shared/components/ui/custom-timer/custom-timer.component';
import { QuizButtonComponent } from './components/quiz-button/quiz-button.component';
import { QuizStepperComponent } from './components/quiz-stepper/quiz-stepper.component';
import { Awnsers } from '../../../shared/interfaces/quiz/awnsers';
import { QuizTitleComponent } from './components/quiz-title/quiz-title.component';
import { QuizScoreComponent } from './components/quiz-score/quiz-score.component';

@Component({
  selector: 'app-quiz-modal',
  imports: [
    CustomModalComponent,
    CustomTimerComponent,
    QuizButtonComponent,
    QuizStepperComponent,
    QuizTitleComponent,
    QuizScoreComponent,
  ],
  templateUrl: './quiz-modal.component.html',
  styleUrl: './quiz-modal.component.scss',
})
export class QuizModalComponent implements OnInit {
  private readonly _quizService = inject(QuizService);
  private readonly _toastrService = inject(ToastrService);
  private readonly destroy$ = new Subject<void>();

  visable = input.required<boolean>();
  examId = input.required<string>();
  quizes!: Array<QuizResponse>;
  curentQuizNumber: number = 1;
  isModalOpen = signal(false);
  startTime = signal(0);
  selectedAnswer: string | null = null;
  myAnswers: Array<Awnsers> = [];

  constructor() {
    effect(() => {
      this.isModalOpen.set(this.visable());
    });
  }

  ngOnInit(): void {
    this.getAllQuizOnExam();
    if (this.quizes.length === 0) {
    }
  }

  next(id: string) {
    if (this.selectedAnswer !== null) {
      this.myAnswers[this.curentQuizNumber - 1] = {
        questionId: id,
        correct: this.selectedAnswer!,
      };
    }
    if (this.curentQuizNumber !== this.quizes.length && this.selectedAnswer) {
      this.curentQuizNumber++;
      console.log(this.myAnswers);
      this.loadCurrentQuestionAnswer();
    }

    if (this.curentQuizNumber > this.quizes.length) {
      this.closeModal();
    }
  }

  previous() {
    if (this.curentQuizNumber !== 1) {
      this.curentQuizNumber--;
      this.loadCurrentQuestionAnswer();
    }
  }

  getAllQuizOnExam() {
    this._quizService
      .getAllQuizOnExams(this.examId())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.quizes = res;
          this.startTime.set(
            this.quizes[this.curentQuizNumber - 1].exam.duration
          );
        },
        error: (error) => this._toastrService.error(error.error.message),
      });
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.curentQuizNumber = 1;
    this.myAnswers = [];
  }

  loadCurrentQuestionAnswer() {
    const questionId = this.quizes[this.curentQuizNumber - 1]?._id;
    const previous = this.myAnswers.find(
      (awnser) => awnser.questionId === questionId
    );
    this.selectedAnswer = previous?.correct ?? null;
  }

  openModal() {
    this.isModalOpen.set(true);
  }
}
