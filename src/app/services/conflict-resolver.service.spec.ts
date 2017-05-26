import { TestBed, inject } from '@angular/core/testing';

import { ConflictResolverService } from './conflict-resolver.service.ts';

describe('ConflictResolverServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConflictResolverService]
    });
  });

  it('should be created', inject([ConflictResolverService], (service: ConflictResolverService) => {
    expect(service).toBeTruthy();
  }));
});
