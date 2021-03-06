import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoboardComponent } from './photoboard.component';
import { PhotoboardModule } from './photoboard.module';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { buildPhotoList } from './test/build-photo-list';


describe(PhotoboardComponent.name, () => {
  let component: PhotoboardComponent;
  let fixture: ComponentFixture<PhotoboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoboardModule],
      declarations: [PhotoboardComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(PhotoboardComponent);
    component = fixture.componentInstance;
  });

  it('Should display rows and columns when (@Input photos) has value', () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    const change: SimpleChanges = { photos: new SimpleChange([], component.photos, true) };
    component.ngOnChanges(change);
    expect(component.rows.length)
      .withContext('Number of rows')
      .toBe(2);
    expect(component.rows[ 0 ].length)
      .withContext('Number of columns from the first row')
      .toBe(4);
    expect(component.rows[ 1 ].length)
      .withContext('Number of columns from the second row')
      .toBe(4);
  });
});
