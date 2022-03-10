import { TestBed } from '@angular/core/testing';

import { FetchcommentService } from './fetchcomment.service';

describe('FetchcommentService', () => {
  let service: FetchcommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchcommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
