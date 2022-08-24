import { TestBed } from '@angular/core/testing';

import { RecursomascotaUService } from './recursomascota-u.service';

describe('RecursomascotaUService', () => {
  let service: RecursomascotaUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursomascotaUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
