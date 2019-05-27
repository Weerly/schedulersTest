import { TestBed } from '@angular/core/testing';

import { ApiComunicatorService } from './api-comunicator.service';

describe('ApiComunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiComunicatorService = TestBed.get(ApiComunicatorService);
    expect(service).toBeTruthy();
  });
});
