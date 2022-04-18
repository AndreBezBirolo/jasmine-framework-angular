import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from './interfaces/photo';

@Component({
  selector: 'app-photoboard',
  templateUrl: './photoboard.component.html',
  styleUrls: ['./photoboard.component.scss']
})
export class PhotoboardComponent implements OnChanges {

  @Input() public photos: Photo[];
  public rows: any[][] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  public groupColumns(photos: Photo[]): any[][] {
    if (!photos) { return; }
    const newRows = [];
    const step = 4;

    for (let index = 0; index < photos.length; index += step) {
      newRows.push(photos.slice(index, index + step));
    }

    return newRows;
  }

}
