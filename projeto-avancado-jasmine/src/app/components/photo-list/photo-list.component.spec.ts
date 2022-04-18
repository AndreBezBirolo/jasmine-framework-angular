import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoboardService } from '../../shared/components/photoboard/services/photoboard.service';
import { buildPhotoList } from '../../shared/components/photoboard/test/build-photo-list';
import { of } from 'rxjs';

describe(PhotoListComponent.name, () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let service: PhotoboardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
    })
      .compileComponents();
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoboardService);
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`(DOM) - Should display board when data arrives`, () => {
    const photos = buildPhotoList();
    spyOn(service, 'getPhotos')
      .and.returnValue(of(photos));
    fixture.detectChanges();
    const board = fixture.nativeElement
      .querySelector('app-photoboard');
    const loader = fixture.nativeElement
      .querySelector('.loader');
    expect(board)
      .withContext('Should not display board')
      .not.toBeNull();
    expect(loader)
      .withContext('Should display loader')
      .toBeNull();
  })

  it(`(DOM) - Should display a loader while waiting for data`, () => {
    const photos = buildPhotoList();
    spyOn(service, 'getPhotos')
      .and.returnValue(null);
    fixture.detectChanges();
    const board = fixture.nativeElement
      .querySelector('app-photoboard');
    const loader = fixture.nativeElement
      .querySelector('.loader');
    expect(loader)
      .withContext('Should display board')
      .not.toBeNull();
    expect(board)
      .withContext('Should not display loader')
      .toBeNull();
  })
});
