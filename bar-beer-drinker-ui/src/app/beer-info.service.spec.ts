import { TestBed } from '@angular/core/testing';

import { BeerInfoService } from './beer-info.service';

describe('BeerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerInfoService = TestBed.get(BeerInfoService);
    expect(service).toBeTruthy();
  });
});
