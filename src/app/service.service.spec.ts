import { TestBed, inject } from '@angular/core/testing';

import { ArithmeticOperationsService } from './arithmeticOperations.service';

describe('ArithmeticOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArithmeticOperationsService]
    });
  });

  it('should be created', inject([ArithmeticOperationsService], (service: ArithmeticOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
