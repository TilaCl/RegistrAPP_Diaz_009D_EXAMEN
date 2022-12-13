import { TestBed } from '@angular/core/testing';

import { ServiceFeriadosService } from './service-feriados.service';

describe('ServiceFeriadosService', () => {
  let service: ServiceFeriadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFeriadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
