import { TestBed } from '@angular/core/testing';

import { ModFreqService } from './mod-freq.service';

describe('ModFreqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModFreqService = TestBed.get(ModFreqService);
    expect(service).toBeTruthy();
  });
});
