import { TestBed } from '@angular/core/testing';

import { VerifyCodeApiAdaptorService } from './verify-code-api-adaptor.service';

describe('VerifyCodeApiAdaptorService', () => {
  let service: VerifyCodeApiAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyCodeApiAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
