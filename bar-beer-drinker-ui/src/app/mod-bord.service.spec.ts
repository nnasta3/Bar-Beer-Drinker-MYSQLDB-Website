import { TestBed } from '@angular/core/testing';

import { ModBordService } from './mod-bord.service';

describe('ModBordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModBordService = TestBed.get(ModBordService);
    expect(service).toBeTruthy();
  });
});
