import { TestBed } from '@angular/core/testing';

import { RecursoFundacionesService } from './recurso-fundaciones.service';

describe('RecursoFundacionesService', () => {
  let service: RecursoFundacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursoFundacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
