import { TestBed } from '@angular/core/testing';

import { ApiViacepService } from './api-viacep.service';

describe('ApiViacepService', () => {
  let service: ApiViacepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiViacepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
