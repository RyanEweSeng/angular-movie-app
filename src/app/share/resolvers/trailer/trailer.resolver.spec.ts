import { TestBed } from '@angular/core/testing';

import { TrailerResolver } from './trailer.resolver';

describe('TrailerResolver', () => {
  let resolver: TrailerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TrailerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
