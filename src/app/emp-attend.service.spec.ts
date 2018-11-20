import { TestBed } from '@angular/core/testing';

import { EmpAttendService } from './emp-attend.service';

describe('EmpAttendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpAttendService = TestBed.get(EmpAttendService);
    expect(service).toBeTruthy();
  });
});
