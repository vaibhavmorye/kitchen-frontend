import { TestBed, inject } from '@angular/core/testing';

import { LiveFeedsService } from './live-feeds.service';

describe('LiveFeedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveFeedsService]
    });
  });

  it('should be created', inject([LiveFeedsService], (service: LiveFeedsService) => {
    expect(service).toBeTruthy();
  }));
});
