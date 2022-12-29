import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchGenreService } from '../services/search-genre.service';
// import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

xdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ HttpClientTestingModule],
      providers: [SearchGenreService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('have be a json ', 
    inject(
      [HttpTestingController, SearchGenreService],
      (httpMock: HttpTestingController) => {

        // l'operazione ci permette di capire se 
        // il server ci restituisce un json 
        const mockReq = httpMock.expectOne('https://openlibrary.org/subjects/fantasy.json');

          expect(mockReq.cancelled).toBeFalsy();
          expect(mockReq.request.responseType).toEqual('json');
          httpMock.verify();
      }
    )
  );
});
