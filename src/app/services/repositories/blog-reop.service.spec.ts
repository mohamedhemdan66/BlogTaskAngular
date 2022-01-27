import { TestBed } from '@angular/core/testing';

import { BlogReopService } from './blog-reop.service';

describe('BlogReopService', () => {
  let service: BlogReopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogReopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
