import { TestBed } from '@angular/core/testing';

import { ViaIbgeMunicipiosService } from './via-ibge-municipios.service';

describe('ViaIbgeMunicipiosService', () => {
  let service: ViaIbgeMunicipiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViaIbgeMunicipiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
