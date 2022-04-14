import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoboardComponent } from './photoboard.component';

describe('PhotoboardComponent', () => {
  let component: PhotoboardComponent;
  let fixture: ComponentFixture<PhotoboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
