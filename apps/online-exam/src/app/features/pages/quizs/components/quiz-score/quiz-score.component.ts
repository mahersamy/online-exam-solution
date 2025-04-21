import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  output,
  signal,
  input,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CustomModalComponent } from '../../../../../shared/components/ui/custom-modal/custom-modal.component';
import { QuizButtonComponent } from '../quiz-button/quiz-button.component';
import { QuizScoreCorrectNumberComponent } from '../quiz-score-correct-number/quiz-score-correct-number.component';
import { QuizResponse } from '../../../../../shared/interfaces/quiz/quiz-response';
import { Awnsers } from '../../../../../shared/interfaces/quiz/awnsers';
import { CorrectAnswer } from '../../../../../shared/interfaces/quiz/correct-awnser';
import { QuizCorrectAwnserComponent } from '../quiz-correct-awnser/quiz-correct-awnser.component';

Chart.register(...registerables);

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.scss'],
  imports: [
    CustomModalComponent,
    QuizButtonComponent,
    QuizScoreCorrectNumberComponent,
    QuizCorrectAwnserComponent,
  ],
})
export class QuizScoreComponent implements AfterViewInit {
  showResult = output<void>();
  backBtn = output<void>();
  quizes = input.required<Array<QuizResponse>>();
  myAwnsers = input.required<Array<Awnsers>>();
  wrongAnswerArray: CorrectAnswer[] = [];
  visable = signal<boolean>(true);
  correctAnswerDialog = signal<boolean>(false);
  @ViewChild('scoreChart') scoreChart!: ElementRef;

  ngOnInit(): void {
    this.myAwnserIsCorrect();
  }

  showResultHandler() {
    this.showResult.emit();
    this.correctAnswerDialog.set(true);
  }

  backToExams() {
    this.visable.set(false);
    this.backBtn.emit();
  }

  myAwnserIsCorrect() {
    for (let i = 0; i < this.quizes().length; i++) {
      const correct = this.quizes()[i].correct;
      const myAwnser = this.myAwnsers()[i].correct;
      const questionId = this.quizes()[i]._id;
      const questionWnserId = this.myAwnsers()[i].questionId;
      const question = this.quizes()[i].question;
      if (correct !== myAwnser && questionId === questionWnserId) {
        this.wrongAnswerArray.push({
          questionId: questionId,
          correct: correct,
          myAnswer: myAwnser,
          question: question,
        });
      }
    }
    console.log('Quizes:', this.quizes());
    console.log('My Answers:', this.myAwnsers());
    console.log('wrongAnswerArray:', this.wrongAnswerArray);
  }

  ngAfterViewInit(): void {
    new Chart(this.scoreChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Correct', 'Wrong'],
        datasets: [
          {
            data: [
              ((this.quizes().length - this.wrongAnswerArray.length) /
                this.quizes().length) *
                100,
              (this.wrongAnswerArray.length / this.quizes().length) * 100,
            ],
            backgroundColor: ['#02369C', '#FF0000'],
            borderWidth: 10,
          },
        ],
      },
      options: {
        cutout: '80%',
        plugins: {
          tooltip: { enabled: true },
          legend: { display: false },
        },
      },
    });
  }
}
