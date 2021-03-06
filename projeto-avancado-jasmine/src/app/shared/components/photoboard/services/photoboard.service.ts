import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class PhotoboardService {

  constructor(private httpClient: HttpClient) {
  }

  public getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${environment.API_URL}/photos`)
      .pipe(map(photos => {
        return photos.map(photo => {
          return { ...photo, description: photo.description.toLocaleUpperCase() }
        })
      }))
  }
}
