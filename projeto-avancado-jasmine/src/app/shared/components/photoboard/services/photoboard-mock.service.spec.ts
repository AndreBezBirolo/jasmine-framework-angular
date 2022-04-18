import { PhotoboardService } from './photoboard.service';
import { Injectable } from '@angular/core';
import { Photo } from '../interfaces/photo';
import { Observable, of } from 'rxjs';
import { buildPhotoList } from '../test/build-photo-list';

@Injectable()
export class PhotoboardMockServiceSpec extends PhotoboardService {
  public getPhoto(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
