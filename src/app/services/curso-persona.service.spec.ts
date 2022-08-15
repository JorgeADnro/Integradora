import { TestBed } from '@angular/core/testing';

import { CursoPersonaService } from './curso-persona.service';

describe('CursoPersonaService', () => {
  let service: CursoPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
