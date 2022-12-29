import { TestBed } from '@angular/core/testing';

import { SearchGenreService } from '../services/search-genre.service';

xdescribe('SearchGenreService', () => {
  let service: SearchGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
