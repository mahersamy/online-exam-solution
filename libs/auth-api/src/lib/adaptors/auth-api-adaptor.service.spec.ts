import { TestBed } from '@angular/core/testing';

import { AuthAPIAdaptorService } from './auth-api-adaptor.service';

describe('AuthAPIAdaptorService', () => {
  let service: AuthAPIAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAPIAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
