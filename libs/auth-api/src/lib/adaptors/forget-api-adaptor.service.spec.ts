import { TestBed } from '@angular/core/testing';

import { ForgetApiAdaptorService } from './forget-api-adaptor.service';

describe('ForgetApiAdaptorService', () => {
  let service: ForgetApiAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetApiAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
