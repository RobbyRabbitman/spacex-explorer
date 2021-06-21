import { TestBed } from '@angular/core/testing';

import { RocketApiService } from './rocket-api.service';

describe('RocketsApiService', () => {
  let service: RocketApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
