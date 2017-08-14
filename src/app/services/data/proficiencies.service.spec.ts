import { TestBed, inject } from '@angular/core/testing';

import { ProficienciesService } from './proficiencies.service';

describe('ProficienciesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProficienciesService]
    });
  });

  it('should be created', inject([ProficienciesService], (service: ProficienciesService) => {
    expect(service).toBeTruthy();
  }));
});
