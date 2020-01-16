import { TestBed } from '@angular/core/testing';

import { ModDrinkersService } from './mod-drinkers.service';

describe('ModDrinkersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModDrinkersService = TestBed.get(ModDrinkersService);
    expect(service).toBeTruthy();
  });
});
