import { TestBed } from '@angular/core/testing';

import { IngresadoDocenteGuard } from './ingresado-docente.guard';

describe('IngresadoDocenteGuard', () => {
  let guard: IngresadoDocenteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoDocenteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
