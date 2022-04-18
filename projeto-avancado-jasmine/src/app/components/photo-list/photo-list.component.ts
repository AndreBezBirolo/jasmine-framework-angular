import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../shared/components/photoboard/interfaces/photo';
import { PhotoboardService } from '../../shared/components/photoboard/services/photoboard.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  public photos$: Observable<Photo[]>;

  constructor(private photoBoard: PhotoboardService) {
  }

  ngOnInit(): void {
    this.photos$ = this.photoBoard.getPhotos();
  }

}
