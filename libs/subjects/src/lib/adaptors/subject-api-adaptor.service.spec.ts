import { TestBed } from '@angular/core/testing';

import { SubjectApiAdaptorService } from './subject-api-adaptor.service';

describe('SubjectApiAdaptorService', () => {
  let service: SubjectApiAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectApiAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
