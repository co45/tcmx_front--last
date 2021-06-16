import { TestBed } from '@angular/core/testing';

import { PdtService } from './pdt.service';

describe('PdtService', () => {
  let service: PdtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
