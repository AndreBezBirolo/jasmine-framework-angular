import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from './interfaces/photo';

@Component({
  selector: 'app-photoboard',
  templateUrl: './photoboard.component.html',
  styleUrls: ['./photoboard.component.scss']
})
export class PhotoboardComponent implements OnChanges {

  constructor() {
  }

  @Input() public photos: Photo[];
  public rows: any[][] = [];

  private static groupColumns(photos: Photo[]): any[][] {
    if (!photos) { return; }
    const newRows = [];
    const step = 4;

    for (let index = 0; index < photos.length; index += step) {
      newRows.push(photos.slice(index, index + step));
    }

    return newRows;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = PhotoboardComponent.groupColumns(changes.photos.currentValue);
    }
  }

}
