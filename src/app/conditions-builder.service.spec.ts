import { TestBed, inject } from '@angular/core/testing';

import { ConditionsBuilderService } from './conditions-builder.service';

describe('ConditionsBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConditionsBuilderService]
    });
  });

  it('should be created', inject([ConditionsBuilderService], (service: ConditionsBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
