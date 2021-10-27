import { TestBed } from '@angular/core/testing';

import { DynamicTempleteService } from './dynamic-templete.service';

describe('DynamicTempleteService', () => {
  let service: DynamicTempleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicTempleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
