import { TestBed, inject } from '@angular/core/testing';

import { ConflictResolverServiceService } from './conflict-resolver.service.ts';

describe('ConflictResolverServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConflictResolverServiceService]
    });
  });

  it('should be created', inject([ConflictResolverServiceService], (service: ConflictResolverServiceService) => {
    expect(service).toBeTruthy();
  }));
});
