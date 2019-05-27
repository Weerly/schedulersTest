import { TestBed } from '@angular/core/testing';

import { InternalCommunicatorService } from './internal-communicator.service';

describe('InternalCommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternalCommunicatorService = TestBed.get(InternalCommunicatorService);
    expect(service).toBeTruthy();
  });
});
