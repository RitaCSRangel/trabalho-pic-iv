import { TestBed } from '@angular/core/testing';

import { DialogoEntreComponentesService } from './dialogo-entre-componentes.service';

describe('DialogoEntreComponentesService', () => {
  let service: DialogoEntreComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogoEntreComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
