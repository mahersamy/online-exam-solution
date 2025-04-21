import { TestBed } from '@angular/core/testing';

import { ResetPasswordApiAdaptorService } from './reset-password-api-adaptor.service';

describe('ResetPasswordApiAdaptorService', () => {
  let service: ResetPasswordApiAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetPasswordApiAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
