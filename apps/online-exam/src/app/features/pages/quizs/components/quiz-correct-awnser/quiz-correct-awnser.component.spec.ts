import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCorrectAwnserComponent } from './quiz-correct-awnser.component';

describe('QuizCorrectAwnserComponent', () => {
  let component: QuizCorrectAwnserComponent;
  let fixture: ComponentFixture<QuizCorrectAwnserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizCorrectAwnserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizCorrectAwnserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
