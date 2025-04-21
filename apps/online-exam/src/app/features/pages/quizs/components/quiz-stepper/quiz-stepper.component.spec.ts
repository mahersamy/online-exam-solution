import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizStepperComponent } from './quiz-stepper.component';

describe('QuizStepperComponent', () => {
  let component: QuizStepperComponent;
  let fixture: ComponentFixture<QuizStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
