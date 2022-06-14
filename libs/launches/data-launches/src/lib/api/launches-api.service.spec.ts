import { TestBed } from '@angular/core/testing';

import { LaunchesApi } from './launches-api.service';

describe('LaunchesApi', () => {
  let service: LaunchesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchesApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
