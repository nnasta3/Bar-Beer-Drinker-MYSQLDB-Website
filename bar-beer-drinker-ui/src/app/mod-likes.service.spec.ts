import { TestBed } from '@angular/core/testing';

import { ModLikesService } from './mod-likes.service';

describe('ModLikesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModLikesService = TestBed.get(ModLikesService);
    expect(service).toBeTruthy();
  });
});
