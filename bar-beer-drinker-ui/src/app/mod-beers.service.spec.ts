import { TestBed } from '@angular/core/testing';

import { ModBeersService } from './mod-beers.service';

describe('ModBeersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModBeersService = TestBed.get(ModBeersService);
    expect(service).toBeTruthy();
  });
});
