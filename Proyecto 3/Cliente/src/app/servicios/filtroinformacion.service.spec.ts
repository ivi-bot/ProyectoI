import { TestBed } from '@angular/core/testing';

import { FiltroinformacionService } from './filtroinformacion.service';

describe('FiltroinformacionService', () => {
  let service: FiltroinformacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroinformacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
