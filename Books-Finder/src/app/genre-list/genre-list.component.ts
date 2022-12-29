import { Component, Input } from '@angular/core';
import { GetDescriptionBookService } from '../services/get-description-book.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent {

  
  @Input() list?:any;

  // change class to show/hide description container
  showDetail:string = "hidden";

  title:string = '';
  description:string = '';
  srcImg:string = '';

  constructor(private _SearchDescription:GetDescriptionBookService ) {}

  // get description details
  showDetails(key:string) :void {
    this.showDetail = "show";

    this._SearchDescription.getDescriptionUrl(key).subscribe(
      data=> {

        this.title = data.title;
        this.description = data.description;
        let cover = data.covers[0];
        this.srcImg = `https://covers.openlibrary.org/b/id/${cover}-M.jpg`;
        console.log(data);
      }
    )
  }

  // close description details container
  close(): void {
    this.showDetail = "hidden";
  }

}
