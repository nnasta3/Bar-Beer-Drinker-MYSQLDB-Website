import { TestBed } from '@angular/core/testing';

import { DrinkerInfoService } from './drinker-info.service';

describe('DrinkerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrinkerInfoService = TestBed.get(DrinkerInfoService);
    expect(service).toBeTruthy();
  });
});
