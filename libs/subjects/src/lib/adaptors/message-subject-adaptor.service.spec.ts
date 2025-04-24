import { TestBed } from '@angular/core/testing';

import { MessageSubjectAdaptorService } from './message-subject-adaptor.service';

describe('MessageSubjectAdaptorService', () => {
  let service: MessageSubjectAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageSubjectAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
