import { TestBed } from '@angular/core/testing';

import { FsrService } from './fsr.service';

describe('FsrService', () => {
  let service: FsrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
