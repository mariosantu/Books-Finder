import { Component } from '@angular/core';
import { SearchGenreService } from '../services/search-genre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

// user genre choice
userChoice:string = '';
// books founded by search function
booksFound?:any;

constructor(private _SearchGenre:SearchGenreService ) { }

// search books function
search(): void {

  if(this.userChoice.length > 0) {

    this._SearchGenre.getGenreUrl(this.userChoice).subscribe(
      data=> {


        if(data.works.length > 0) {
          this.booksFound = data.works;
          this.userChoice = '';
          console.log('libri trovati');
          console.log(this.booksFound);

        } else {
          alert("this genre doesn't exist or server unavaible");
        }
        
      }
    ) 
  }
}
}
