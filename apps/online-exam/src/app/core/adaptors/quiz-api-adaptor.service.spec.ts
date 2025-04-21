import { TestBed } from '@angular/core/testing';

import { QuizApiAdaptorService } from './quiz-api-adaptor.service';

describe('QuizApiAdaptorService', () => {
  let service: QuizApiAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizApiAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
