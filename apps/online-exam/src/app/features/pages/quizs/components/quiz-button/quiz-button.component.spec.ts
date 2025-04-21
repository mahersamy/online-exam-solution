import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizButtonComponent } from './quiz-button.component';

describe('QuizButtonComponent', () => {
  let component: QuizButtonComponent;
  let fixture: ComponentFixture<QuizButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
