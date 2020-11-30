import { TestBed } from '@angular/core/testing';

import { EApplicationService } from './e-application.service';

describe('EApplicationService', () => {
  let service: EApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
