import { TestBed } from '@angular/core/testing';

import { BiereService } from './biere.service';

describe('BiereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiereService = TestBed.get(BiereService);
    expect(service).toBeTruthy();
  });
});
