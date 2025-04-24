import { TestBed } from '@angular/core/testing';

import { ExamApiAdaptorService } from './exam-api-adaptor.service';

describe('ExamApiAdaptorService', () => {
  let service: ExamApiAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamApiAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
