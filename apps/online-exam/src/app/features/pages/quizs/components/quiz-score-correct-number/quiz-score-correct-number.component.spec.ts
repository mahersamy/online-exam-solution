import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScoreCorrectNumberComponent } from './quiz-score-correct-number.component';

describe('QuizScoreCorrectNumberComponent', () => {
  let component: QuizScoreCorrectNumberComponent;
  let fixture: ComponentFixture<QuizScoreCorrectNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizScoreCorrectNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizScoreCorrectNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
