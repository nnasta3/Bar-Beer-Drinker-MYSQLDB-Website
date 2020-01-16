import { TestBed } from '@angular/core/testing';

import { ModSellsService } from './mod-sells.service';

describe('ModSellsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModSellsService = TestBed.get(ModSellsService);
    expect(service).toBeTruthy();
  });
});
