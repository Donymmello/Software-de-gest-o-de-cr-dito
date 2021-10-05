import { TestBed } from '@angular/core/testing';

import { MutuarioService } from './mutuario.service';

describe('MutuarioService', () => {
  let service: MutuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
