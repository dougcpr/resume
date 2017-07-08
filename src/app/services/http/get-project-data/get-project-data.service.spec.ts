import { TestBed, inject } from '@angular/core/testing';

import { GetProjectDataService } from './get-project-data.service';

describe('GetProjectDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetProjectDataService]
    });
  });

  it('should be created', inject([GetProjectDataService], (service: GetProjectDataService) => {
    expect(service).toBeTruthy();
  }));
});
