import { TestBed } from '@angular/core/testing';

import { GetDescriptionBookService } from './get-description-book.service';

xdescribe('GetDescriptionBookService', () => {
  let service: GetDescriptionBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDescriptionBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
