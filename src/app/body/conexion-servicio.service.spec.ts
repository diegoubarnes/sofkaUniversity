import { TestBed } from '@angular/core/testing';
import { ConexionServiceService } from '../body/conexion-servicio.service';

describe('ConexionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConexionServiceService = TestBed.get(ConexionServiceService);
    expect(service).toBeTruthy();
  });
});
