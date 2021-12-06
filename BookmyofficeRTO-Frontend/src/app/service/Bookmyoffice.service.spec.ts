/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookmyofficeService } from './Bookmyoffice.service';

describe('Service: Bookmyoffice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmyofficeService]
    });
  });

  it('should ...', inject([BookmyofficeService], (service: BookmyofficeService) => {
    expect(service).toBeTruthy();
  }));
});
