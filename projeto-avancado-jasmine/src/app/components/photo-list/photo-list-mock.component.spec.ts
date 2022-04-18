import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoboardService } from '../../shared/components/photoboard/services/photoboard.service';
import { PhotoboardMockServiceSpec } from '../../shared/components/photoboard/services/photoboard-mock.service.spec';

describe(PhotoListComponent.name + ' Mock Provider', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [
        {
          provide: PhotoboardService,
          useClass: PhotoboardMockServiceSpec
        }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`(DOM) - Should display board when data arrives`, () => {
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
});
