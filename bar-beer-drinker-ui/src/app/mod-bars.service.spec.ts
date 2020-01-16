import { TestBed } from '@angular/core/testing';

import { ModBarsService } from './mod-bars.service';

describe('ModBarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModBarsService = TestBed.get(ModBarsService);
    expect(service).toBeTruthy();
  });
});
