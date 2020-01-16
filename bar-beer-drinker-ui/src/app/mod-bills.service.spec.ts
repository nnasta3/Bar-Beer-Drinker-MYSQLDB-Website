import { TestBed } from '@angular/core/testing';

import { ModBillsService } from './mod-bills.service';

describe('ModBillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModBillsService = TestBed.get(ModBillsService);
    expect(service).toBeTruthy();
  });
});
