import { TestBed } from '@angular/core/testing';

import { RecursomascotaUsuarioService } from './recursomascota-usuario.service';

describe('RecursomascotaUsuarioService', () => {
  let service: RecursomascotaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursomascotaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
