import { TestBed } from '@angular/core/testing';

import { KadyaService } from './kadya.service';

describe('KadyaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KadyaService = TestBed.get(KadyaService);
    expect(service).toBeTruthy();
  });
});
