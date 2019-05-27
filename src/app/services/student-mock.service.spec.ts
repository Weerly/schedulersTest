import { TestBed } from '@angular/core/testing';

import { StudentMockService } from './student-mock.service';

describe('StudentMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentMockService = TestBed.get(StudentMockService);
    expect(service).toBeTruthy();
  });
});
