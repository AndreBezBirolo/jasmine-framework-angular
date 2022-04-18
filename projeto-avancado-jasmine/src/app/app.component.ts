import { Component, OnInit } from '@angular/core';
import { PhotoboardService } from './shared/components/photoboard/services/photoboard.service';
import { Observable } from 'rxjs';
import { Photo } from './shared/components/photoboard/interfaces/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular testing';
  public photos$: Observable<Photo[]>;

  constructor(private photoBoard: PhotoboardService) {
  }

  ngOnInit(): void {
    this.photos$ = this.photoBoard.getPhotos();
  }
}
